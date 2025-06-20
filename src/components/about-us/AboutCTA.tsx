// src/components/about/AboutCTA.jsx
import React from 'react';

const AboutCTA = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let us Build Something Great Together
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Whether you are an ISP looking to expand, a data center optimizing performance, or an enterprise planning a digital transformation— we are here to help.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-full text-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
          Contact us today for a consultation
        </button>
        <p className="mt-8 text-gray-400">
          Discover how we can transform your IT infrastructure into a strategic advantage
        </p>
      </div>
    </div>
  );
};

export default AboutCTA;