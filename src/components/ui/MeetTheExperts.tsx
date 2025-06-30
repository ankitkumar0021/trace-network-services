import Link from 'next/link';
import React from 'react';
import { FaNetworkWired, FaUserShield } from 'react-icons/fa';

const MeetTheExperts = () => {
  const experts = [
     {
      name: "Shivam Kumar",
      title: "Director",
      expertise: "Commercials & Sales | 13 Years ISP Industry Experience",
      icon: <FaNetworkWired className="text-3xl" />,
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Rohit Jain",
      title: "Director",
      expertise: "Core Network Engineer | 15 Years in Networking",
      icon: <FaUserShield className="text-3xl" />,
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Ankit Kumar",
      title: "Tech Assistent",
      expertise: "Software Engineer | 3 Years Experience",
      icon: <FaUserShield className="text-3xl" />,
      color: "from-purple-500 to-purple-700"
    },
    
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-amber-400">
            Meet the Experts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our certified professionals bring deep technical expertise to your project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-3 bg-gradient-to-r ${expert.color}`}></div>
              
              <div className="p-6 text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${expert.color} shadow-lg`}>
                  {expert.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                <p className="text-blue-300 font-medium mb-3">{expert.title}</p>
                <p className="text-gray-300 text-sm px-4">
                  {expert.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href={`/contact-us`} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-full text-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetTheExperts;