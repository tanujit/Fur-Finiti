import React, { useState } from 'react';
import { User, Calendar, Heart, Settings } from 'lucide-react';

const UserAccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <button type="submit" className="bg-[#501CD6] text-white px-4 py-2 rounded-md hover:bg-[#3f16a8]">
                Update Profile
              </button>
            </form>
          </div>
        );
      case 'bookings':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-semibold">Pet Grooming</h3>
                <p>Date: May 15, 2024</p>
                <p>Time: 2:00 PM</p>
                <p>Status: Confirmed</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-semibold">Veterinary Checkup</h3>
                <p>Date: June 1, 2024</p>
                <p>Time: 10:00 AM</p>
                <p>Status: Pending</p>
              </div>
            </div>
          </div>
        );
      case 'favorites':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-semibold">Premium Dog Food</h3>
                <p>Category: Pet Food</p>
                <button className="text-[#501CD6] hover:underline">View Details</button>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-semibold">Luxury Pet Bed</h3>
                <p>Category: Pet Accessories</p>
                <button className="text-[#501CD6] hover:underline">View Details</button>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Notification Preferences</h3>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Email notifications
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  SMS notifications
                </label>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Change Password</h3>
                <form>
                  <div className="mb-2">
                    <input type="password" placeholder="Current Password" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div className="mb-2">
                    <input type="password" placeholder="New Password" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div className="mb-2">
                    <input type="password" placeholder="Confirm New Password" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <button type="submit" className="bg-[#501CD6] text-white px-4 py-2 rounded-md hover:bg-[#3f16a8]">
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#501CD6] mb-8">My Account</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="space-y-2">
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-md ${activeTab === 'profile' ? 'bg-[#501CD6] text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="mr-2" />
                  Profile
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-md ${activeTab === 'bookings' ? 'bg-[#501CD6] text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('bookings')}
                >
                  <Calendar className="mr-2" />
                  My Bookings
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-md ${activeTab === 'favorites' ? 'bg-[#501CD6] text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('favorites')}
                >
                  <Heart className="mr-2" />
                  Favorites
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center w-full p-2 rounded-md ${activeTab === 'settings' ? 'bg-[#501CD6] text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings className="mr-2" />
                  Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountPage;