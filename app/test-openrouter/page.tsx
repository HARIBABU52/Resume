'use client';

import { useState } from 'react';
import { OpenRouterService } from '@/lib/openRouterService';

export default function TestOpenRouter() {
  const [input, setInput] = useState<string>('');
  const [conversation, setConversation] = useState<{role: string, content: string, model?: string}[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setIsLoading(true);
    setError(null);

    // Add user message to conversation
    setConversation(prev => [...prev, { role: 'You', content: userMessage }]);

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
      if (!apiKey) {
        throw new Error('OpenRouter API key is not set');
      }

      const openRouter = new OpenRouterService(apiKey);
      
      // Use chatWithReasoning for more detailed responses
      const { initialResponse } = await openRouter.chatWithReasoning(
        userMessage,
        "Provide more details about your previous response."
      );

      // Get the model name from the response or use the default
      const modelName = openRouter.getModelName();
      
      // Add AI response to conversation
      setConversation(prev => [
        ...prev, 
        { 
          role: 'AI Assistant', 
          content: initialResponse.content,
          model: modelName
        }
      ]);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setConversation(prev => [
        ...prev, 
        { 
          role: 'System', 
          content: 'Error: ' + (err instanceof Error ? err.message : 'Something went wrong') 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">OpenRouter Chat Test</h1>
          <p className="text-sm opacity-80">Test the OpenRouter API integration</p>
        </div>

        {/* Chat Area */}
        <div className="h-[70vh] overflow-y-auto p-4 space-y-4">
          {conversation.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-500">
              <p>Start a conversation with the AI assistant...</p>
            </div>
          ) : (
            conversation.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === 'You' 
                      ? 'bg-blue-100 text-blue-900' 
                      : msg.role === 'AI Assistant'
                        ? 'bg-green-50 text-green-900'
                        : 'bg-red-50 text-red-900'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-medium opacity-70">{msg.role}</span>
                    {msg.model && (
                      <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-500">
                        {msg.model}
                      </span>
                    )}
                  </div>
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t p-4 bg-gray-50">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </form>
          {error && (
            <div className="mt-2 text-red-600 text-sm">
              Error: {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
