'use client';

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mwpbjpaj'); // Your Formspree endpoint ID

  return (
    <div className="bg_gradient main_padding_color">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Info Panel */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-lg text-gray-300 mb-8">
              Fill out the form and our team will get back to you within 24 hours. For urgent issues, please call our support line directly.
            </p>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Before You Contact</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Have your network details ready for faster assistance',
                  'For critical outages, include your ticket number if available',
                  'Business hours response: 8AM-8PM EST | 24/7 for emergencies',
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 relative">
            {/* Success Notification */}
            {state.succeeded && (
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-gray-300 text-center">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={state.succeeded ? 'opacity-30 pointer-events-none' : ''}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="grid grid-cols-1  gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                {/* <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2">Company</label>
                  <input type="text" id="company" name="company" className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                </div> */}
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-300 mb-2">Service Interest *</label>
                <select id="service" name="service" required className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select a service</option>
                  <option value="managed-it">Managed IT Services</option>
                  <option value="isp-setup">ISP Setup & Support</option>
                  <option value="equipment">Equipment Configuration</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="emergency">Emergency Support</option>
                  <option value="other">Other</option>
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" disabled={state.submitting} className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/20">
                <FaPaperPlane className="mr-3" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
