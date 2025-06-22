// src/components/services/ServicesOverview.tsx
import React from 'react';
import { FaTools, FaGlobe, FaServer, FaShieldAlt, FaCloud, FaChartLine } from 'react-icons/fa';

const ServicesOverview = () => {
  const services = [
    {
      title: "Managed IT Services",
      icon: <FaTools className="text-4xl" />,
      description: "Proactive monitoring and management of your IT infrastructure",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "ISP Setup & Support",
      icon: <FaGlobe className="text-4xl" />,
      description: "End-to-end solutions for internet service providers",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Equipment Configuration",
      icon: <FaServer className="text-4xl" />,
      description: "Multi-vendor device setup and optimization",
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Network Security",
      icon: <FaShieldAlt className="text-4xl" />,
      description: "Comprehensive protection for your digital assets",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud className="text-4xl" />,
      description: "Migration, management, and optimization of cloud infrastructure",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "IT Consulting",
      icon: <FaChartLine className="text-4xl" />,
      description: "Strategic planning for technology-driven growth",
      color: "from-emerald-500 to-emerald-700"
    }
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored services to meet your specific business requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;