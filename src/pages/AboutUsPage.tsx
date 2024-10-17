import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#501CD6] mb-8 text-center">About Fur Finiti</h1>
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At Fur Finiti, our mission is to provide comprehensive, high-quality pet care services that enhance the lives of pets and their owners. We strive to create a community where every pet receives the love, attention, and care they deserve.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-4">
            We envision a world where pet care is accessible, convenient, and tailored to the unique needs of every pet. Fur Finiti aims to be the go-to platform for all pet-related services, fostering happy, healthy relationships between pets and their human companions.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Compassion: We treat every pet with the love and care they deserve.</li>
            <li>Excellence: We strive for the highest standards in all our services.</li>
            <li>Innovation: We continuously seek new ways to improve pet care.</li>
            <li>Integrity: We operate with honesty and transparency in all our dealings.</li>
            <li>Community: We foster a supportive network of pet lovers and professionals.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-4">
            Fur Finiti is powered by a passionate team of pet lovers, veterinarians, trainers, and tech experts. Together, we work tirelessly to ensure that every interaction with our platform is a positive experience for both pets and their owners.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;