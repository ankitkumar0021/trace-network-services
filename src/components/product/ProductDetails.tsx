'use client'
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import ImageComponent from '../ui/ImageComponent';
import QuantitySelector from './QuantitySelector';

const ImageMagnifier = ({ imageUrl }: { imageUrl: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const lensSize = 100;
  const zoomFactor = 2;

  const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    
    const lensX = Math.max(0, Math.min(x - lensSize/2, rect.width - lensSize));
    const lensY = Math.max(0, Math.min(y - lensSize/2, rect.height - lensSize));
    
    setPosition({ x: percentX, y: percentY });
    setCursorPosition({ x: lensX, y: lensY });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseHover}
    >
      <ImageComponent 
        url={imageUrl} 
        img_title="Product image" 
        object_cover={false} 
      />
      
      {showMagnifier && (
        <div 
          className="absolute border-2 border-gray-300 bg-transparent bg-opacity-30 pointer-events-none"
          style={{
            width: `${lensSize}px`,
            height: `${lensSize}px`,
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            zIndex: 10,
          }}
        />
      )}
      
      {showMagnifier && containerRef.current && (
        <div 
          className="absolute hidden md:block left-full ml-4 border border-gray-300 bg-white overflow-hidden z-20"
          style={{
            width: `${lensSize * 3}px`,
            height: `${lensSize * 3}px`,
            top: 0,
            left:0
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: `${containerRef.current.offsetWidth * zoomFactor}px ${containerRef.current.offsetHeight * zoomFactor}px`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default function ProductDetails() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 mb-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="w-[90%]">
            <Link href="#">
              <ImageMagnifier imageUrl="/images/product/pro.jpg" />
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="space-y-4">
            <h1 className="text-[#333333] font-michroma text-2xl font-normal">HIKMICRO LYNX S LE10S 10mm 256×192 12mic &lt;35mK Thermal Monocular</h1>
            <div className="flex items-center gap-2">
              <div className="w-6 h-auto">
                <Link href="#">
                  <ImageComponent url="/images/product/download.svg" img_title="Download" object_cover={false} />
                </Link>
              </div>
              <p className="text-[#333333] font-rubik text-[40px] font-medium">$999.99</p>
            </div>
            <div className="text-[#333333] font-rubik text-sm font-normal text-justify space-y-4">
              <p>
                Is the HIKMICRO Lynx LE10 worth it over the Lynx 6mm? The simple answer is yes!
                The larger 256×192 12um 35mK thermal sensor provides a superb performance out to 100–150m making it a perfect choice
                for locating and identifying rabbits, birds and squirrels. The super compact HIKMICRO LE10’s enhanced performance
                makes it a perfect choice for rat controllers who are looking to improve their identification ability when scanning
                farm yards and barns, the larger sensor allows the thermal to pick out higher levels of detail when scanning an area
                quickly. Like every HIKMICRO product you have the ability stream your vision straight from the thermal to a smart phone
                or capture the footage and access it within seconds on your phone for easing sharing on social media.
              </p>
              <p className="text-[#333333] font-rubik text-base font-medium">SKU: LE10S</p>
              <p className="text-[#333333] font-rubik text-base font-medium">Category: LYNX S</p>
            </div>
            <QuantitySelector />
          </div>
        </div>
      </div>
    </>
  );
}