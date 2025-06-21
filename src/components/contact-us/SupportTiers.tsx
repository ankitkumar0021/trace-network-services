// src/components/contact/SupportTiers.jsx
import React from 'react';
import { FaHeadset, FaShieldAlt, FaRocket } from 'react-icons/fa';

const SupportTiers = () => {
  const tiers = [
    {
      title: "Standard Support",
      icon: <FaHeadset className="text-3xl" />,
      description: "For non-critical inquiries and general questions",
      features: [
        "Email support",
        "Business hours response",
        "Basic troubleshooting",
        "Next business day response"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Priority Support",
      icon: <FaShieldAlt className="text-3xl" />,
      description: "For established clients with service agreements",
      features: [
        "24/7 phone support",
        "4-hour response SLA",
        "Dedicated engineer",
        "Advanced troubleshooting"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Enterprise Critical",
      icon: <FaRocket className="text-3xl" />,
      description: "For mission-critical infrastructure support",
      features: [
        "15-minute response SLA",
        "Dedicated support team",
        "On-site emergency dispatch",
        "Infrastructure monitoring"
      ],
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Tiers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the support level that matches your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${tier.color}`}>
                {tier.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{tier.title}</h3>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full px-6 py-3 bg-gradient-to-r ${tier.color} text-white font-medium rounded-lg hover:opacity-90 transition-opacity`}>
                {index === 0 ? "Get Started" : "Contact Sales"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportTiers;