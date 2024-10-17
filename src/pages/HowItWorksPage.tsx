import React from 'react';
import { Search, Calendar, Truck, CreditCard } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Browse Services',
      description: 'Explore our wide range of pet services and products.'
    },
    {
      icon: Calendar,
      title: 'Book a Service',
      description: 'Choose a service and select a convenient time slot.'
    },
    {
      icon: Truck,
      title: 'Service Delivery',
      description: 'Our professionals will provide the service as scheduled.'
    },
    {
      icon: CreditCard,
      title: 'Payment',
      description: 'Securely pay for the service through our platform.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#501CD6] mb-8 text-center">How It Works</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <step.icon className="text-[#501CD6] w-16 h-16 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">How do I create an account?</h3>
              <p>Click on the "Sign Up" button in the top right corner of the homepage and follow the prompts to create your account.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I cancel or reschedule a booking?</h3>
              <p>Yes, you can cancel or reschedule a booking up to 24 hours before the scheduled service time through your account dashboard.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I leave a review for a service?</h3>
              <p>After your service is completed, you'll receive an email invitation to leave a review. You can also leave reviews through your account dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;