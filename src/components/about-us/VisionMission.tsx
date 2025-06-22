// src/components/about/VisionMission.jsx
import React from 'react';
import { FaBinoculars, FaRocket } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4">
                <FaBinoculars className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-300">
              To become the most trusted partner for organizations worldwide by delivering innovative network solutions that power performance, security, and future growth.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/30 to-green-700/30 backdrop-blur-sm rounded-xl p-8 border border-green-700/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mr-4">
                <FaRocket className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-300">
              Our mission is to analyze, enhance, and manage IT infrastructure with a combination of advanced technology, industry-certified expertise, and customer-first values. We aim to ensure maximum uptime, better cost-efficiency, and strategic growth through our consulting and implementation services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;