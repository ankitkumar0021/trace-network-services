'use client'
import React, { useState } from 'react'
import ImageComponent from '@/components/ui/ImageComponent'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  // Framer Motion variants for smooth slide + fade
  const menuVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeInOut' }
    },
    closed: {
      height: 0,
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }

interface MobileLinkClass {
    (href: string): string
}

const mobileLinkClass: MobileLinkClass = (href) =>
    `py-2 px-4 rounded-md text-center ${
        pathname === href ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'
    }`

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-gradient-to-br from-gray-100 to-gray-600 custom_container_padding">
      <div className="mx-auto sm:min-h-[106px] lg:min-h-[80px] flex items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="w-[80px] sm:w-[100px] lg:w-[100px]">
            <ImageComponent url="/images/trace.png" img_title="Logo" object_cover={false} />
          </Link>
          <button
            className="lg:hidden p-2 mr-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`} />
              <span className={`absolute h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/about-us" className="text-white font-semibold text-2xl font-poppins hover:text-primary transition-colors">About Us</Link>
          <Link href="/services" className="text-white font-semibold text-2xl font-poppins hover:text-primary transition-colors">Our Services</Link>
          <Link href="/contact-us" className="text-white font-semibold text-2xl font-poppins hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="py-4 px-4">
              <div className="flex flex-col space-y-4">
                <Link href="/about-us" className={mobileLinkClass('/about-us')}>About Us</Link>
                <Link href="/services" className={mobileLinkClass('/services')}>Our Services</Link>
                <Link href="/contact-us" className={mobileLinkClass('/contact-us')}>Contact</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
