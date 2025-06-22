// src/components/ExpertiseSection.jsx
import React from 'react';
import { FaMedal, FaUserTie, FaTools, FaChartLine, FaCertificate } from 'react-icons/fa';
import { SiCisco, SiHuawei, SiJunipernetworks, SiMikrotik, SiNokia } from 'react-icons/si';

const ExpertiseSection = () => {
  const stats = [
    { value: "Certified by Authorized Network Centers", icon: <FaMedal /> },
    { value: "Years of Hands-on Experience", icon: <FaUserTie /> },
    { value: "Advanced Technical Expertise", icon: <FaTools /> },
    { value: "Proven Performance Metrics", icon: <FaChartLine /> }
  ];

  const certifications = [
    { 
      name: "Cisco Certified", 
      icon: <SiCisco className="text-5xl text-pink-500" />,
      color: "border-pink-500"
    },
    { 
      name: "Huawei Certified", 
      icon: <SiHuawei className="text-5xl text-red-500" />,
      color: "border-red-500"
    },
    { 
      name: "Mikrotik Certified", 
      icon: <SiMikrotik className="text-5xl text-yellow-500" />,
      color: "border-yellow-500"
    },
    { 
      name: "Juniper Certified", 
      icon: <SiJunipernetworks className="text-5xl text-green-500" />,
      color: "border-green-500"
    },
    { 
      name: "Nokia Certified", 
      icon: <SiNokia className="text-5xl text-indigo-500" />,
      color: "border-indigo-500"
    },
    { 
      name: "Maipu Certified", 
      icon: <div className="text-3xl font-bold text-purple-500">MAIPU</div>,
      color: "border-purple-500"
    }
  ];

  const partners = [
    { name: "Cisco", icon: <SiCisco className="text-4xl" /> },
    { name: "Huawei", icon: <SiHuawei className="text-4xl" /> },
    { name: "Mikrotik", icon: <SiMikrotik className="text-4xl" /> },
    { name: "Juniper", icon: <SiJunipernetworks className="text-4xl" /> },
    { name: "Nokia", icon: <SiNokia className="text-4xl" /> },
    { name: "Maipu", icon: <div className="text-2xl font-bold">MAIPU</div> }
  ];

  return (
    <div className="min-h-screen bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certified professionals with extensive industry experience
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-blue-500 to-green-500 text-white text-2xl">
                {stat.icon}
              </div>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
        
        {/* Industry Certifications - Improved Design */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <FaCertificate className="text-3xl text-yellow-400 mr-3" />
              <h3 className="text-3xl font-bold text-center">Industry Certifications</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-t-4 ${cert.color} border-gray-700/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                    <p className="text-gray-300">Our team holds professional certifications in installation, configuration, and troubleshooting of {cert.name.split(' ')[0]} equipment.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partner Brands */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold mb-8 text-center">Working With Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl text-gray-200 mb-2 hover:text-white transition-colors">
                  {partner.icon}
                </div>
                <span className="text-sm font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;