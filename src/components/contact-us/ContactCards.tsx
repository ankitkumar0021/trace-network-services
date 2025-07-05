// src/components/contact/ContactCards.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactCards = () => {
  const contactMethods = [
    {
      title: "Call Us",
      description: "Speak directly with our technical team",
      details: "+91 8059210000",
      icon: <FaPhone className="text-3xl" />,
      color: "from-blue-500 to-blue-700",
      action: "#"
    },
    {
      title: "Email Us",
      description: "Get a response within 24 hours",
      details: "tracenetwork4u@gmail.com",
      icon: <FaEnvelope className="text-3xl" />,
      color: "from-purple-500 to-purple-700",
      action: "mailto:tracenetwork4u@gmail.com"
    },
    {
      title: "Visit Us",
      description: "Our headquarters location",
      details: "Corp. Office, A-121 Top Floor, DDA Shed Okhla Industrial Area Phase 11, New delhi",
      icon: <FaMapMarkerAlt className="text-3xl" />,
      color: "from-green-500 to-green-700",
      action: "https://maps.google.com"
    },
    {
      title: "Hours",
      description: "Our support availability",
      details: "Mon-Fri: 8AM-8PM EST\n24/7 Emergency Support",
      icon: <FaClock className="text-3xl" />,
      color: "from-amber-500 to-amber-700",
      action: null
    }
  ];

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${method.color}`}>
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <div className="text-gray-300 whitespace-pre-line mb-6">
                {method.details}
              </div>
              {method.action && (
                <a 
                  href={method.action} 
                  className={`mt-4 inline-block px-4 py-2 bg-gradient-to-r ${method.color} text-white rounded-lg hover:opacity-90 transition-opacity`}
                >
                  Connect
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCards;