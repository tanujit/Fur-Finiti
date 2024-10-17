import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fur Finiti</h3>
            <p>Your one-stop platform for all pet services.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#501CD6]">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#501CD6]">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#501CD6]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#501CD6]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Pet Care & Wellness</li>
              <li>Pet Boarding & Daycare</li>
              <li>Pet Grooming & Training</li>
              <li>Pet Travel & Vacation</li>
              <li>Pet Products & Shopping</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#501CD6]"><Facebook /></a>
              <a href="#" className="hover:text-[#501CD6]"><Twitter /></a>
              <a href="#" className="hover:text-[#501CD6]"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Fur Finiti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;