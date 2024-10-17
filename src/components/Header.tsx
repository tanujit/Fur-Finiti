import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-[#501CD6]">
          <PawPrint className="mr-2" />
          Fur Finiti
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-[#501CD6]">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#501CD6]">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#501CD6]">About Us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-[#501CD6]">How It Works</Link></li>
            <li><Link to="/contact" className="hover:text-[#501CD6]">Contact</Link></li>
            <li><Link to="/account" className="hover:text-[#501CD6]">My Account</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;