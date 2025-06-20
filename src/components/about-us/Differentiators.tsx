// src/components/about/Differentiators.jsx
import React from 'react';
import { FaUserTie, FaBalanceScale, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Differentiators = () => {
  const points = [
    {
      title: "Certified Professionals",
      icon: <FaUserTie className="text-2xl" />,
      description: "Our team consists of certified experts (Cisco, Juniper, Mikrotik, etc.) with deep industry knowledge and hands-on skills.",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Vendor-Independent Consulting",
      icon: <FaBalanceScale className="text-2xl" />,
      description: "We work with a wide range of networking equipment—Cisco, Huawei, Juniper, Mikrotik, Nokia, Maipu—and select the most suitable solution based on your needs, not vendor bias.",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "End-to-End ISP Solutions",
      icon: <FaShieldAlt className="text-2xl" />,
      description: "From wireless and FTTH setup to BGP/MPLS configuration and VPN tunnels, we handle every part of your ISP journey.",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Cost-Optimized Solutions",
      icon: <FaChartLine className="text-2xl" />,
      description: "We provide high-performance solutions without overburdening your budget. We help you avoid the cost of in-house IT teams by offering fully managed services.",
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            What Sets Us Apart?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${point.color}`}>
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Differentiators;