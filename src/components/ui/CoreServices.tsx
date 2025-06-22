// src/components/CoreServices.jsx
import Link from 'next/link';
import React from 'react';
import { FaTools, FaGlobe, FaServer} from 'react-icons/fa';

const CoreServices = () => {
  const services = [
    {
      title: "Managed IT Services",
      icon: <FaTools className="text-4xl" />,
      color: "from-blue-500 to-blue-700",
      items: [
        "IT Strategy Consulting",
        "Network Health Analysis",
        "IT Infrastructure Support",
        "System Administration",
        "Remote Monitoring & Optimization"
      ]
    },
    {
      title: "ISP Setup & Support",
      icon: <FaGlobe className="text-4xl" />,
      color: "from-green-500 to-green-700",
      items: [
        "Wireless ISP Setup",
        "FTTH Setup",
        "Core Network & POP Setup",
        "BGP, MPLS, VPN, GRE Tunnel Configuration"
      ]
    },
    {
      title: "Equipment Configuration",
      icon: <FaServer className="text-4xl" />,
      color: "from-amber-500 to-amber-700",
      items: [
        "Router/Switch/Server Setup",
        "Secure VPN Configurations",
        "VLAN & MPLS Implementation",
        "Multivendor Device Support"
      ]
    }
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/services" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Explore All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;