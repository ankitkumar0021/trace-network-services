import CoreServices from '@/components/ui/CoreServices'
import ExpertiseSection from '@/components/ui/ExpertiseSection'
import MainBanner from '@/components/widgets/banners/MainBanner'
import React from 'react'

export default function Homepage() {
  return (
    <>
      <div className=''>
          <MainBanner />
          <CoreServices />
          <ExpertiseSection />
      </div>
    </>
  )
}
