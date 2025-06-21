import ContactCards from '@/components/contact-us/ContactCards'
import ContactForm from '@/components/contact-us/ContactForm'
import ContactMap from '@/components/contact-us/ContactMap'
import ContactHero from '@/components/contact-us/ContactUs'
import SupportTiers from '@/components/contact-us/SupportTiers'
import React from 'react'

export default function page() {
  return (
    <div>
        <ContactHero />
        <ContactCards />
        <ContactForm />
        <SupportTiers />
        <ContactMap />    
    </div>
  )
}
