'use client'
import React, { useState } from 'react'
import ImageComponent from '@/components/ui/ImageComponent'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function PrimaryHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuVariants = {
        open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.3 } }
    }

    return (
        <header className="shadow-sm sticky top-0 z-50 bg-gradient-to-br from-gray-100 to-gray-600 custom_container_padding">
            <div className="mx-auto sm:min-h-[106px] lg:min-h-[80px] flex items-center justify-between">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link href={`/`} className="w-[80px] sm:w-[100px] lg:w-[130px]">
                        <ImageComponent url={`/images/trace.png`} img_title={`Logo`} object_cover={false}/>
                    </Link>
                    <button 
                        className="lg:hidden p-2 mr-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="w-6 h-6 relative">
                            <span className={`absolute h-0.5 w-full font-montserrat font-medium bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                            <span className={`absolute h-0.5 w-full font-montserrat font-medium bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                            <span className={`absolute h-0.5 w-full font-montserrat font-medium bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                        </div>
                    </button>
                </div>
                <div className="hidden lg:flex items-center space-x-8">
                    <Link href="/about-us" className="text-white font-semibold text-2xl font-poppins hover:text-primary transition-colors">About Us</Link>
                    <Link href="/services" className="text-white font-semibold text-2xl font-poppinst hover:text-primary transition-colors">Our Services</Link>
                    <Link href="/contact-us" className="text-white font-semibold text-2xl font-poppins hover:text-primary transition-colors">Contact</Link>
                    {/* <button className="bg-primary text-white px-4 py-2 font-montserrat font-semibold rounded-md hover:bg-white hover:text-primary transition-colors">Get Started</button> */}
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="lg:hidden bg-white border-t border-gray-200"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <div className="flex flex-col space-y-4">
                                <Link href="/about-us" className="text-gray-700 hover:text-primary py-2">About</Link>
                                <Link href="/services" className="text-gray-700 hover:text-primary py-2">Services</Link>
                                <Link href="/contact-us" className="text-gray-700 hover:text-primary py-2">Contact</Link>
                                <button className="bg-primary w-fit text-white px-4 py-2 rounded-md hover:bg-primary-dark text-left">Get Started</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}