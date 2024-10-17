import React, { useState } from 'react';
import { Heart, Home, Scissors, Plane, ShoppingBag } from 'lucide-react';

interface Service {
  title: string;
  icon: React.ElementType;
  items: string[];
  description: string;
  image: string;
}

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: 'Pet Care & Wellness',
      icon: Heart,
      items: [
        'Veterinary Services',
        'Pet Health Checkups',
        'Emergency Pet Care',
      ],
      description:
        "Ensure your pet's health and happiness with our comprehensive care services. From routine check-ups to emergency care, we've got your furry friend covered.",
      image:
        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pet Boarding & Daycare',
      icon: Home,
      items: [
        'Overnight Pet Boarding',
        'Dog Sitting Services',
        'Daycare Facilities',
      ],
      description:
        'Travel worry-free knowing your pet is in good hands. Our boarding and daycare services provide a home away from home for your furry family members.',
      image:
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pet Grooming & Training',
      icon: Scissors,
      items: [
        'Grooming Packages',
        'Behavior Training',
        'Obedience Training Sessions',
      ],
      description:
        'Keep your pet looking and behaving their best with our professional grooming and training services. From basic trims to advanced obedience, we have got you covered.',
      image:
        'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pet Travel & Vacation',
      icon: Plane,
      items: [
        'Train Booking Assistance',
        'Pet-Friendly Hotel Booking',
        'Pet-Friendly Car Rental Services',
      ],
      description:
        "Make your travels stress-free with our pet-friendly vacation planning services. We'll help you find the perfect accommodations and transportation for you and your pet.",
      image:
        'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pet Products & Shopping',
      icon: ShoppingBag,
      items: [
        'Pet Food & Nutrition',
        'Toys & Accessories',
        'Apparel & Carriers',
      ],
      description:
        "Find everything your pet needs in our comprehensive online store. From premium foods to fun toys and stylish accessories, we've got all your pet shopping needs covered.",
      image:
        'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#501CD6] mb-8 text-center">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedService(service)}
          >
            <service.icon className="text-[#501CD6] w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
            <ul className="space-y-2">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <span className="w-2 h-2 bg-[#501CD6] rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 text-[#501CD6] hover:underline"
              onClick={() => setSelectedService(service)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedService.title}
            </h2>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{selectedService.description}</p>
            <h3 className="font-semibold mb-2">Services Offered:</h3>
            <ul className="list-disc pl-5 mb-4">
              {selectedService.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button
              className="bg-[#501CD6] text-white px-4 py-2 rounded-md hover:bg-[#3f16a8]"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
