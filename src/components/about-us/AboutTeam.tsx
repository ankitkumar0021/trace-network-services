// src/components/about/AboutTeam.jsx
import Link from 'next/link';
import React from 'react';
import ImageComponent from '../ui/ImageComponent';

const AboutTeam = () => {
  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="bg-gray-700 rounded-xl w-full h-64" >
                <Link href={`/about-us`} className="w-[120px] sm:w-[140px] lg:w-[160px] overflow-hidden">
                    <ImageComponent url={`/images/common/team2.png`} img_title={`Logo`} object_cover={true}/>
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At Trace Network Support Services, our team is our strength. Each member brings a unique mix of technical expertise, field experience, and certifications, ensuring the delivery of reliable, secure, and future-ready IT solutions.
            </p>
            <p className="text-lg text-gray-300">
              We don not just solve problems—we design systems that prevent them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;