'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSubmitted(true); 
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Failed:', await res.json());
        alert('Sorry, something went wrong.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Sorry, could not send message.');
    }
  };

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
                {['Have your network details ready for faster assistance','For critical outages, include your ticket number if available','Business hours response: 8AM-8PM EST | 24/7 for emergencies'].map((tip, idx) => (
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
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-gray-300">Thank you for contacting us. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2">Company</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-300 mb-2">Service Interest *</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} required className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="managed-it">Managed IT Services</option>
                    <option value="isp-setup">ISP Setup & Support</option>
                    <option value="equipment">Equipment Configuration</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="emergency">Emergency Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                </div>

                <button type="submit" className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/20">
                  <FaPaperPlane className="mr-3" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
