'use client';

import React, { useState } from 'react';
import ReviewsForm from './ReviewsForm';

export default function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionItems = [
    { title: 'DESCRIPTION', content: 'The HIKMICRO Lynx-S PRO LE10 Smart Thermal Hand Held Monocular delivers industry‑leading thermal performance in a compact form factor. Its 256×192 12 µm sensor offers high‑resolution imaging out to 100–150 m, making it ideal for locating and identifying small game or inspecting equipment in low‑light conditions.' },
    { title: 'SPECS', content: '• Sensor: 256×192 px, 12 µm, 35 mK\n• Lens: 10 mm\n• Refresh Rate: 50 Hz\n• Display: 1024×768 AMOLED\n• Battery Life: up to 4 hours\n• Weight: 180 g\n• Dimensions: 140 × 50 × 50 mm' },
    { title: 'FEATURES', content: '• Wi‑Fi & Bluetooth streaming to mobile app\n• Multiple palette presets (White Hot, Black Hot, Red Hot, Rainbow)\n• Built‑in 8 GB storage for stills & video\n• Ruggedized IP67 water/dust resistance\n• Snapshot & video recording with a single button\n• 3D Digital Detail Enhancement (DDE)\n• Picture‑in‑Picture (PiP) mode' },
    { title: 'VIDEOS', content: 'No videos available at the moment. Check back later for tutorials and full‑resolution demos.' },
    { title: 'WHAT\'S IN THE BOX', content: '• HIKMICRO Lynx‑S PRO LE10 Smart Thermal Hand Held Monocular – 10 mm 35 mK 256×192 px 12 µm\n• Rechargeable Li‑ion Battery\n• USB‑C Charging Cable\n• Wrist Strap\n• User Manual\n• Carrying Case' },
    { title: 'WARRANTY', content: 'Every HIKMICRO product includes a 2‑year limited manufacturer’s warranty covering defects in materials and workmanship. Contact customer support for assistance with warranty claims.' },
    { title: 'DELIVERY & RETURNS', content: 'Free standard shipping on all domestic orders over $100. Returns accepted within 30 days of delivery; items must be in original packaging and unused. Please review our full return policy before initiating a return.' },
    { title: 'ASK A QUESTION', content: 'Have a question about this product? Email us at support@hikmicro.com or call our toll‑free number. Our technical specialists are available from 9 AM to 6 PM (EST) Monday through Friday.' },
    { title: 'REVIEWS (0)', content: <ReviewsForm /> },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div>
      {accordionItems.map((item, index) => (
        <div key={item.title}>
          <div
            onClick={() => toggleItem(index)}
            className={`flex justify-between items-center cursor-pointer px-4 py-3 border-b-2 border-white text-white ${openIndex === index ? 'bg-black' : 'bg-[#666666]'}`}
          >
            <span className="font-rubik text-lg font-normal ">{item.title}</span>
            <span className="text-xl transition-transform duration-300 ease-in-out">{openIndex === index ? '▲' : '▼'}</span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white text-[#212121] font-rubik font-base border-l border-r border-gray-200 px-4 py-4 whitespace-pre-line">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}