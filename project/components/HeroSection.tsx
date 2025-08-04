'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-primary/70"></div>
      
      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 max-w-4xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Your Amazon Success
          <span className="block text-brand-highlight">Starts Here</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Professional Amazon seller services to maximize your sales, optimize your listings, and build your brand on the world's largest marketplace.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button 
            size="lg" 
            className="bg-brand-highlight hover:bg-brand-highlight/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </Button>
          
          {/* <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}