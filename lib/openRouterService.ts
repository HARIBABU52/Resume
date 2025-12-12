interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  reasoning_details?: any; // You might want to type this more specifically based on the API response
}

interface ChatCompletionResponse {
  choices: {
    message: Message;
    finish_reason: string;
    index: number;
  }[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class OpenRouterService {
  public getModelName(): string {
    // Extract a cleaner name from the model ID
    return this.defaultModel.split('/').pop()?.split(':')[0] || this.defaultModel;
  }
  private apiKey: string;
  private baseUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private defaultModel = 'nvidia/nemotron-nano-12b-v2-vl:free';

  constructor(apiKey: string) {
    if (!apiKey) {
      throw new Error('OpenRouter API key is required');
    }
    this.apiKey = apiKey;
  }

  private async makeRequest(messages: any[], options: { model?: string; reasoning?: boolean; temperature?: number; max_tokens?: number } = {}) {
    const { model = this.defaultModel, reasoning = false } = options;

    try {
      console.log('Sending request to OpenRouter with model:', model);
      console.log('Messages:', JSON.stringify(messages, null, 2));
      
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'Resume Builder'
        },
        body: JSON.stringify({
          model,
          messages,
          ...(reasoning && { reasoning: { enabled: true } })
        })
      });

      const responseData = await response.json().catch(() => ({}));
      
      if (!response.ok) {
        console.error('OpenRouter API error:', {
          status: response.status,
          statusText: response.statusText,
          response: responseData
        });
        
        const errorMessage = responseData.error?.message || 
                           responseData.error?.code || 
                           `HTTP ${response.status}: ${response.statusText}`;
        
        throw new Error(`OpenRouter API error: ${errorMessage}`);
      }

      console.log('OpenRouter response:', responseData);
      return responseData;
    } catch (error) {
      console.error('OpenRouter API request failed:', error);
      throw error;
    }
  }

  async chatCompletion(messages: any[], options: { model?: string; temperature?: number } = {}) {
    return this.makeRequest(messages, {
      model: options.model || this.defaultModel,
      temperature: options.temperature,
      max_tokens: 1000
    });
  }

  async chatWithReasoning(initialPrompt: string, followUpPrompt: string) {
    // First API call with reasoning
    const firstResponse = await this.makeRequest(
      [{ role: 'user', content: initialPrompt }],
      { reasoning: true }
    );

    // Extract the assistant message with reasoning_details
    const assistantMessage = firstResponse.choices[0].message;

    // Preserve the assistant message with reasoning_details
    const messages = [
      {
        role: 'user',
        content: initialPrompt,
      },
      {
        role: 'assistant',
        content: assistantMessage.content,
        reasoning_details: assistantMessage.reasoning_details,
      },
      {
        role: 'user',
        content: followUpPrompt,
      },
    ];

    // Second API call - model continues reasoning from where it left off
    const secondResponse = await this.makeRequest(messages);

    return {
      initialResponse: assistantMessage,
      followUpResponse: secondResponse.choices[0].message,
    };
  }

  // Basic chat method for simple requests

  // Basic chat method for simple requests
  async chat(messages: Message[], model?: string): Promise<Message> {
    const response = await this.makeRequest(messages, { model });
    return response.choices[0].message;
  }
}

// Example usage:
// const openRouter = new OpenRouterService(process.env.OPENROUTER_API_KEY!);
// 
// // Using chatWithReasoning for multi-turn with reasoning
// const { initialResponse, followUpResponse } = await openRouter.chatWithReasoning(
//   "How many r's are in the word 'strawberry'?",
//   "Are you sure? Think carefully."
// );
// 
// // Using basic chat
// const response = await openRouter.chat([
//   { role: 'user', content: 'Hello, how are you?' }
// ]);
