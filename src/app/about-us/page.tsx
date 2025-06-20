import AboutCTA from '@/components/about-us/AboutCTA'
import AboutHero from '@/components/about-us/AboutHero'
import AboutIntro from '@/components/about-us/AboutIntro'
import AboutTeam from '@/components/about-us/AboutTeam'
import Differentiators from '@/components/about-us/Differentiators'
import IndustriesServed from '@/components/about-us/IndustriesServed'
import VisionMission from '@/components/about-us/VisionMission'
import React from 'react'

export default function page() {
  return (
    <>
        <AboutHero />
        <AboutIntro />
        <VisionMission />
        <Differentiators />
        <IndustriesServed />
        <AboutTeam />
        <AboutCTA />
    </>
  )
}
