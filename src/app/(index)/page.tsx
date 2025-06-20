import CoreServices from '@/components/ui/CoreServices'
import ExpertiseSection from '@/components/ui/ExpertiseSection'
import MeetTheExperts from '@/components/ui/MeetTheExperts'
import WhyChooseUs from '@/components/ui/WhyChooseUs'
import MainBanner from '@/components/widgets/banners/MainBanner'
import React from 'react'

export default function Homepage() {
  return (
    <>
      <div className=''>
          <MainBanner />
          <CoreServices />
          <ExpertiseSection />
          <WhyChooseUs />
          <MeetTheExperts />
      </div>
    </>
  )
}
