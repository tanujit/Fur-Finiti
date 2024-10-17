import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Star, ShoppingBag } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#501CD6] mb-4">Welcome to Fur Finiti</h1>
        <p className="text-xl mb-6">Your one-stop platform for all pet services</p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for services or locations"
              className="w-full px-4 py-2 rounded-full border-2 border-[#501CD6] focus:outline-none focus:ring-2 focus:ring-[#501CD6]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#501CD6]">
              <Search />
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Heart className="text-[#501CD6] w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Pet Care & Wellness</h2>
          <p className="mb-4">Medical checkups, veterinary services, and more.</p>
          <Link to="/services" className="text-[#501CD6] hover:underline">Learn More</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Star className="text-[#501CD6] w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Pet Boarding & Daycare</h2>
          <p className="mb-4">Boarding, sitting, and daycare facilities.</p>
          <Link to="/services" className="text-[#501CD6] hover:underline">Learn More</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ShoppingBag className="text-[#501CD6] w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Pet Products & Shopping</h2>
          <p className="mb-4">Shop for pet food, accessories, and more.</p>
          <Link to="/services" className="text-[#501CD6] hover:underline">Learn More</Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Add featured services here */}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add testimonials here */}
        </div>
      </section>

      <section className="bg-[#501CD6] text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to pamper your pet?</h2>
        <p className="mb-6">Book a service or shop for products now!</p>
        <Link to="/services" className="bg-white text-[#501CD6] px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
          Explore Services
        </Link>
      </section>
    </div>
  );
};

export default HomePage;