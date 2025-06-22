// src/components/services/ServicesHero.tsx
import React from 'react';

const ServicesHero = () => {
  return (
    <div className="bg_gradient text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to optimize your network infrastructure, enhance security, and drive business growth
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;