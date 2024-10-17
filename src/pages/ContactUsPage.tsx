import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#501CD6] mb-8 text-center">
        Contact Us
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#501CD6] text-white px-4 py-2 rounded-md hover:bg-[#3f16a8]"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-[#501CD6] w-6 h-6 mr-2" />
                <span>+91-9777528130</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#501CD6] w-6 h-6 mr-2" />
                <span>support@furfiniti.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-[#501CD6] w-6 h-6 mr-2" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">
                What services do you offer?
              </h3>
              <p>
                We offer a wide range of pet services including pet care &
                wellness, boarding & daycare, grooming & training, travel &
                vacation planning, and pet products shopping.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How can I book a service?</h3>
              <p>
                You can book a service by creating an account on our platform,
                browsing our services, and selecting the one you need. Follow
                the booking process to choose a date and time that works for
                you.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                What if I need to cancel a booking?
              </h3>
              <p>
                You can cancel a booking up to 24 hours before the scheduled
                service time through your account dashboard. Please refer to our
                cancellation policy for more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
