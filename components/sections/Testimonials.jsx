import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The resume templates helped me land interviews at top tech companies. The clean design really made my experience stand out.",
    author: "Sarah Johnson",
    role: "Senior Software Engineer"
  },
  {
    id: 2,
    quote: "I was able to create a professional resume in minutes. The ATS optimization is a game changer!",
    author: "Michael Chen",
    role: "Product Manager"
  },
  {
    id: 3,
    quote: "The variety of templates made it easy to find one that matched my industry. Highly recommend!",
    author: "Emily Rodriguez",
    role: "Marketing Director"
  }
];

const Testimonials = () => {
  return (
    <section className="mt-24 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">What Our Users Say</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Join thousands of professionals who have successfully landed their dream jobs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-amber-400 text-2xl mb-4">"</div>
            <p className="text-slate-700 italic mb-4">{testimonial.quote}</p>
            <div className="mt-4">
              <p className="font-semibold text-slate-900">{testimonial.author}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
