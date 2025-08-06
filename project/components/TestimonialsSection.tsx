'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    quote: 'Amazon Central Services transformed our struggling Amazon business into a profitable venture. Their expertise in product optimization increased our sales by 200% in just 4 months.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    quote: 'The team\'s knowledge of Amazon\'s algorithm and their A+ Content creation skills are exceptional. We\'ve seen a significant improvement in our conversion rates and brand visibility.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    quote: 'From account setup to brand registry, they handled everything professionally. Their ongoing support and strategic guidance have been invaluable to our Amazon success.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-primary/85"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          
          <div className="w-24 h-1  bg-yellow-500 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our successful Amazon sellers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="h-full bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-brand-accent italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-brand-accent">
                        Amazon Seller
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}