// src/components/services/EquipmentServices.tsx
import React from 'react';
import { FaServer, FaFire, FaWifi, FaShieldAlt } from 'react-icons/fa';
import { MdRouter } from 'react-icons/md';

const EquipmentServices = () => {
  const vendors = [
    { name: "Cisco", icon: <MdRouter  className="text-3xl" />, color: "from-blue-500 to-blue-700" },
    { name: "Juniper", icon: <FaServer className="text-3xl" />, color: "from-red-500 to-red-700" },
    { name: "MikroTik", icon: <FaWifi className="text-3xl" />, color: "from-amber-500 to-amber-700" },
    { name: "Fortinet", icon: <FaShieldAlt className="text-3xl" />, color: "from-green-500 to-green-700" },
    { name: "Huawei", icon: <FaFire className="text-3xl" />, color: "from-purple-500 to-purple-700" }
  ];

  const services = [
    "Router/Switch Configuration",
    "Firewall Setup & Security Policies",
    "Wireless Controller Deployment",
    "Load Balancer Configuration",
    "VPN Setup (IPSec, SSL, GRE)",
    "VLAN and MPLS Implementation",
    "QoS Configuration",
    "Network Automation"
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Equipment Configuration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert configuration for multi-vendor networking equipment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Vendor Expertise</h3>
            <div className="flex flex-wrap gap-6 mb-8">
              {vendors.map((vendor, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br ${vendor.color}`}>
                    {vendor.icon}
                  </div>
                  <span className="font-medium">{vendor.name}</span>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-300 mb-6">
              Our certified engineers have extensive experience with leading networking equipment providers. We provide vendor-neutral recommendations and configuration services tailored to your specific requirements.
            </p>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-8">
              <h4 className="text-xl font-bold mb-4">Configuration Services Include:</h4>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6">Our Process</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-lg font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Requirement Analysis</h4>
                  <p className="text-gray-300">Understand your network needs and business objectives</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-lg font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Configuration Planning</h4>
                  <p className="text-gray-300">Develop detailed configuration templates and test plans</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-lg font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Implementation</h4>
                  <p className="text-gray-300">Configure devices in lab environment before production</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-lg font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Validation & Documentation</h4>
                  <p className="text-gray-300">Thorough testing and comprehensive documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentServices;