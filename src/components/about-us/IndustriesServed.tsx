// src/components/about/IndustriesServed.jsx
import React from 'react';
import { FaWifi, FaBuilding, FaDatabase, FaSchool, FaHospital, FaMoneyBillWave } from 'react-icons/fa';

const IndustriesServed = () => {
  const industries = [
    { 
      name: "Internet Service Providers", 
      description: "Wireless & Fiber solutions", 
      icon: <FaWifi className="text-3xl" />,
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "Corporate & Enterprise", 
      description: "Business network solutions", 
      icon: <FaBuilding className="text-3xl" />,
      color: "from-purple-500 to-purple-700"
    },
    { 
      name: "Data Centers", 
      description: "Hosting environments", 
      icon: <FaDatabase className="text-3xl" />,
      color: "from-green-500 to-green-700"
    },
    { 
      name: "Education & Government", 
      description: "Campus & public networks", 
      icon: <FaSchool className="text-3xl" />,
      color: "from-amber-500 to-amber-700"
    },
    { 
      name: "Healthcare", 
      description: "Medical network infrastructure", 
      icon: <FaHospital className="text-3xl" />,
      color: "from-red-500 to-red-700"
    },
    { 
      name: "Financial Services", 
      description: "Secure banking networks", 
      icon: <FaMoneyBillWave className="text-3xl" />,
      color: "from-emerald-500 to-emerald-700"
    }
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized solutions for diverse industry needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${industry.color}`}>
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
              <p className="text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;