import React from 'react';
import { FaCheckCircle, FaUserTie, FaMoneyBillWave, FaNetworkWired, FaClock, FaChessKnight } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Certified Professionals",
      description: "Certified and Experienced Network Professionals",
      icon: <FaUserTie className="text-2xl" />,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Cost Effective",
      description: "Cost-Effective & Scalable Solutions",
      icon: <FaMoneyBillWave className="text-2xl" />,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Complex Networks",
      description: "Expertise in Complex Networking Environments",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "from-green-500 to-green-700"
    },
    {
      title: "24/7 Support",
      description: "24/7 Network Monitoring and Support",
      icon: <FaClock className="text-2xl" />,
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Custom Solutions",
      description: "Custom-Tailored IT Strategies for Your Business",
      icon: <FaChessKnight className="text-2xl" />,
      color: "from-red-500 to-red-700"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver exceptional IT services with unmatched expertise and dedication
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 flex items-start">
                <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 text-green-400" />
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-full text-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;