// src/components/contact/ContactMap.jsx
import React from 'react';

const ContactMap = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Headquarters
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visit our office or connect with us remotely from anywhere in the world
          </p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
          <div className="aspect-w-16 aspect-h-9">
            {/* Google Maps iframe - replace with your actual embed code */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101418.82155576356!2d-122.08574927773436!3d37.40247299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1718877325893!5m2!1sen!2sin"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Visit Us</h3>
              <p className="text-gray-300">
                123 Tech Park Drive<br />
                Suite 500<br />
                Silicon Valley, CA 94088<br />
                United States
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Parking Information</h3>
              <p className="text-gray-300">
                Free visitor parking available<br />
                Garage entrance on Innovation Blvd<br />
                Reserved spots near Building C
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <p className="text-gray-300">
                Monday-Friday: 9AM-5PM PST<br />
                Weekends: Closed<br />
                <span className="text-blue-400">24/7 Remote Support Available</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;