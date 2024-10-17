import React from 'react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: '10 Essential Tips for New Pet Owners',
      excerpt: 'Bringing a new pet home is exciting, but it can also be overwhelming. Here are 10 essential tips to help you get started on the right foot.',
      date: 'May 1, 2024',
      author: 'Dr. Jane Smith'
    },
    {
      title: 'The Benefits of Regular Pet Grooming',
      excerpt: 'Regular grooming is not just about keeping your pet looking good. It also has numerous health benefits. Learn why grooming should be a part of your pet care routine.',
      date: 'April 15, 2024',
      author: 'Mark Johnson'
    },
    {
      title: 'Traveling with Pets: A Complete Guide',
      excerpt: 'Planning a trip with your furry friend? Our comprehensive guide covers everything you need to know about traveling with pets, from preparation to arrival.',
      date: 'April 1, 2024',
      author: 'Sarah Thompson'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#501CD6] mb-8 text-center">Pet Care Blog</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">
                By {post.author} | {post.date}
              </p>
              <p className="mb-4">{post.excerpt}</p>
              <button className="text-[#501CD6] hover:underline">Read More</button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#501CD6] text-white px-6 py-2 rounded-full hover:bg-[#3f16a8]">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;