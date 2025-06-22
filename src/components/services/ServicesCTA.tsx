// src/components/services/ServicesCTA.tsx
import React from 'react';

const ServicesCTA = () => {
  return (
    <div className="bg_gradient text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your IT Infrastructure?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Schedule a consultation with our experts to discuss your specific requirements and discover how we can help your business thrive.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Schedule a Consultation
          </button>
          <button className="px-8 py-4 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-all">
            Download Service Catalog
          </button>
        </div>
        <p className="mt-8 text-gray-400 text-sm">
          Have questions? Call us at +1 (555) 123-4567 or email info@tracenetwork.com
        </p>
      </div>
    </div>
  );
};

export default ServicesCTA;