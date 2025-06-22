// src/pages/ServicesPage.tsx
import EquipmentServices from '@/components/services/EquipmentServices';
import ISPServices from '@/components/services/ISPServices';
import ManagedServices from '@/components/services/ManagedServices';
import ServicesCTA from '@/components/services/ServicesCTA';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesOverview from '@/components/services/ServicesOverview';
import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      <ServicesHero />
      <ServicesOverview />
      <ManagedServices />
      <ISPServices />
      <EquipmentServices />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;