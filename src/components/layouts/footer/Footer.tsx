'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ImageComponent from '@/components/ui/ImageComponent'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Services', href: '/services' },
    ],
    services: [
      { name: 'ISP Network Support Services', href: '#' },
      { name: 'Managed IT Serivces', href: '#' },
      { name: 'Network Integration services', href: '#' },
      { name: 'Consulting', href: '#' },
    ],
    connect: [
      // { name: 'support@trace.com', href: 'mailto:support@trace.com' },
      { name: 'tracenetwork4u@gmail.com', href: '#' },
      { name: '+91 8059210000', href: '#' },
      { name: 'Corp. Office, A-121 Top Floor, DDA Shed Okhla Industrial Area Phase 11, New delhi', href: '#' },
    ],
  }

  const socialIcons = [
    { Icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { Icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  const linkVariants = {
    hover: { y: -2, color: '#3b82f6', transition: { duration: 0.2 } },
  }

  return (
    <footer className="bg-gray-900 custom_container_padding" >
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="p-2 w-[120px] bg-white rounded-2xl">
              <ImageComponent
                url="/images/trace.png"
                img_title="Footer Logo"
                object_cover={false}
              />
            </div>
            <p className="text-sm text-gray-400">
              Empowering businesses with innovative solutions. Join us in shaping the future of technology.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-light transition-colors"
                  whileHover={{ scale: 1.1 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <motion.li key={link.name} variants={linkVariants} whileHover="hover">
                  <a href={link.href} className="text-gray-400 hover:text-primary-light text-sm">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <motion.li key={link.name} variants={linkVariants} whileHover="hover">
                  <a href={link.href} className="text-gray-400 hover:text-primary-light text-sm">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <motion.li key={link.name} variants={linkVariants} whileHover="hover">
                  <a href={link.href} className="text-gray-400 hover:text-primary-light text-sm">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Trace. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              href="/privacy-policy"
              className="text-gray-400 hover:text-primary text-sm"
              variants={linkVariants}
              whileHover="hover"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-primary text-sm"
              variants={linkVariants}
              whileHover="hover"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}