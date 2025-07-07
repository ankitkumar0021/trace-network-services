// src/components/contact/ContactMap.jsx
import React from 'react';

const ContactMap = () => {
  return (
    <div className="bg_gradient main_padding_color">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.23653273717!2d77.26818305311208!3d28.532609327760323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1590d7466cb%3A0xe679f924e75ac573!2sDDA%20Shed%2C%20Block%20A%2C%20Okhla%20Phase%20II%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1751906270956!5m2!1sen!2sin"
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
               Corp. Office, A-121 Top Floor, DDA Shed Okhla Industrial Area Phase 11, New delhi
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Parking Information</h3>
              <p className="text-gray-300">
                Free visitor parking available<br />
                Garage entrance on Innovation Blvd<br />
                Reserved spots near Building
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <p className="text-gray-300">
                Monday-Sunday: 7AM-11PM PST<br />
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