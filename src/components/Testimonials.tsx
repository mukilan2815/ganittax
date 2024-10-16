import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    company: 'ABC Corp',
    content: 'Ganit Tax has been instrumental in optimizing our tax strategy. Their expertise and personalized approach have saved us both time and money.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    company: 'XYZ LLC',
    content: 'I\'ve been using Ganit Tax for my personal and business taxes for years. Their team is always professional, knowledgeable, and responsive.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    company: 'Johnson Enterprises',
    content: 'The level of detail and care that Ganit Tax puts into their work is unmatched. They\'ve helped us navigate complex tax situations with ease.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4">{testimonial.content}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;