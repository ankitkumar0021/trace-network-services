// src/components/about/AboutIntro.jsx
import React from 'react';

const AboutIntro = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded in 2024, Trace Network Support Services is a dynamic and future-focused IT and network consulting firm specializing in delivering reliable, scalable, and cost-effective solutions for Internet Service Providers (ISPs), Data Centers, and Enterprise environments.
            </p>
            <p className="text-lg text-gray-300">
              We are passionate about enabling businesses to thrive through optimized network architecture, seamless server integration, and round-the-clock managed services. With a team of certified professionals and years of hands-on experience, we take pride in designing and deploying mission-critical infrastructure that forms the backbone of digital connectivity.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="bg-gray-700 border-2 border-dashed rounded-xl w-full h-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;