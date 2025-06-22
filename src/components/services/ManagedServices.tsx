// src/components/services/ManagedServices.tsx
import React from 'react';
import { FaCheck, FaChartLine, FaShieldAlt, FaSync, FaHeadset } from 'react-icons/fa';

const ManagedServices = () => {
  const features = [
    {
      title: "Proactive Monitoring",
      icon: <FaChartLine className="text-2xl" />,
      description: "24/7 monitoring of your network infrastructure with real-time alerts",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Security Management",
      icon: <FaShieldAlt className="text-2xl" />,
      description: "Comprehensive threat protection and vulnerability management",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Performance Optimization",
      icon: <FaSync className="text-2xl" />,
      description: "Continuous tuning for maximum network efficiency and speed",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Help Desk Support",
      icon: <FaHeadset className="text-2xl" />,
      description: "Dedicated technical support with guaranteed response times",
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Managed IT Services
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our comprehensive managed services provide ongoing maintenance, monitoring, and support for your IT infrastructure. We act as your virtual IT department, ensuring maximum uptime and performance.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <FaCheck className="w-4 h-4 text-white" />
                </div>
                <span className="ml-3 text-gray-300">Predictable monthly pricing with no hidden fees</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <FaCheck className="w-4 h-4 text-white" />
                </div>
                <span className="ml-3 text-gray-300">Customized service plans based on your needs</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <FaCheck className="w-4 h-4 text-white" />
                </div>
                <span className="ml-3 text-gray-300">Regular performance reporting and strategic reviews</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-green-700 transition-all">
                Request Consultation
              </button>
              <button className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all">
                Download Service PDF
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServices;