'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 bg-brand-background"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            About Amazon Central Services
          </h2>
          
          <div className="w-24 h-1 bg-brand-highlight mx-auto mb-8"></div>
          
          <div className="space-y-6 text-lg text-brand-accent leading-relaxed">
            <p>
              <strong className="text-brand-primary">Amazon Central Services</strong> is your trusted partner in Amazon marketplace success. With over 5 years of experience and hundreds of successful Amazon sellers under our guidance, we specialize in transforming struggling Amazon businesses into thriving, profitable enterprises.
            </p>
            
            <p>
              Our team of certified Amazon experts understands the complexities of selling on Amazon's ever-evolving platform. From account setup to advanced optimization strategies, we provide comprehensive solutions that drive real results for our clients.
            </p>
            
            <p>
              <strong className="text-brand-primary">Why choose us?</strong> We combine deep Amazon expertise with personalized service, ensuring each client receives tailored strategies that align with their unique business goals. Our proven track record speaks for itself - we've helped sellers increase their revenue by an average of 150% within the first six months.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-highlight mb-2">500+</div>
              <div className="text-brand-accent">Successful Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-highlight mb-2">5+</div>
              <div className="text-brand-accent">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-highlight mb-2">150%</div>
              <div className="text-brand-accent">Average Revenue Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}