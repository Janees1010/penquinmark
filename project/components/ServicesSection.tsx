'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, TrendingUp, FileText, Shield } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Account Setup',
    description: 'Complete Amazon seller account setup and optimization. We handle all the technical details so you can focus on growing your business.',
  },
  {
    icon: TrendingUp,
    title: 'Product Optimization',
    description: 'Professional listing optimization including keyword research, compelling product descriptions, and conversion-focused strategies.',
  },
  {
    icon: FileText,
    title: 'A+ Content',
    description: 'Create stunning A+ Content pages that showcase your products with enhanced images, detailed descriptions, and brand storytelling.',
  },
  {
    icon: Shield,
    title: 'Brand Registry',
    description: 'Amazon Brand Registry setup and management to protect your brand, unlock advanced tools, and enhance your brand presence.',
  },
];

export default function ServicesSection() {
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
      id="services" 
      ref={sectionRef}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive Amazon seller services designed to maximize your success on the world's largest marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-200 group bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-yellow-500" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
