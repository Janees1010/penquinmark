'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Amazon Central Services</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for Amazon marketplace success. We help sellers maximize their potential on the world's largest eCommerce platform.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Account Setup</li>
              <li>Product Optimization</li>
              <li>A+ Content Creation</li>
              <li>Brand Registry</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@amazoncentral.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Get Started</h3>
            <p className="text-gray-300 mb-4">
              Ready to transform your Amazon business?
            </p>
            <Button 
              className="bg-brand-highlight hover:bg-brand-highlight/90 text-white w-full"
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us Today
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Amazon Central Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}