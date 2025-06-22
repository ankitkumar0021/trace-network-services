// src/components/services/ISPServices.tsx
import React from 'react';
import { FaWifi, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import { FaFireBurner } from 'react-icons/fa6';

const ISPServices = () => {
  const solutions = [
    {
      title: "Wireless ISP Setup",
      icon: <FaWifi className="text-2xl" />,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "FTTH Deployment",
      icon: <FaFireBurner className="text-2xl" />,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Core Network Design",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Security Infrastructure",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "from-amber-500 to-amber-700"
    }
  ];

  const technologies = [
    "BGP/MPLS Configuration", "QoS Implementation", "GPON Networks", 
    "Point-to-Point Wireless", "Network Function Virtualization", "Subscriber Management",
    "Bandwidth Optimization", "Peering Arrangements"
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ISP Setup & Support
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end solutions for internet service providers of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${solution.color}`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-300 mb-6">
              We design, implement, and manage carrier-grade networks with expertise in both wireless and fiber technologies. Our solutions include:
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6">Our ISP Services Include</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white">1</span>
                </div>
                <span className="ml-3 text-gray-300"><span className="font-semibold">Network Design:</span> Scalable architecture planning and documentation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <span className="text-white">2</span>
                </div>
                <span className="ml-3 text-gray-300"><span className="font-semibold">Equipment Procurement:</span> Vendor-neutral recommendations and sourcing</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <span className="text-white">3</span>
                </div>
                <span className="ml-3 text-gray-300"><span className="font-semibold">Configuration & Deployment:</span> On-site and remote implementation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                  <span className="text-white">4</span>
                </div>
                <span className="ml-3 text-gray-300"><span className="font-semibold">Ongoing Support:</span> 24/7 monitoring and maintenance</span>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg border border-blue-700/30">
              <p className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span className="text-gray-300">All implementations include comprehensive documentation and staff training</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISPServices;