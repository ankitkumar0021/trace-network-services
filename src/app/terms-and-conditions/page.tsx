import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className='custom_container_margin'>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-400">
            Last Updated: June 20, 2025
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to Trace Network Support Services (Company, we, our). These Terms and Conditions (Terms) govern your use of our website located at tracenetwork.com and our services (collectively, Services).
            </p>
            <p>
              By accessing or using our Services, you (Client, you, your) agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Services.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              2. Services Provided
            </h2>
            <p className="mb-4">
              Trace Network Support Services provides IT consulting, network setup, equipment configuration, and managed services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Managed IT Services (remote monitoring, optimization, troubleshooting)</li>
              <li>ISP Network Setup (Wireless, FTTH, BGP/MPLS configuration)</li>
              <li>Multi-vendor equipment integration (Cisco, Juniper, Mikrotik, etc.)</li>
              <li>Network security and VPN configurations</li>
              <li>24/7 network monitoring and support</li>
            </ul>
            <p>
              Service specifics will be detailed in individual Service Level Agreements (SLAs) or Statements of Work (SOWs) signed separately.
            </p>
          </section>

          {/* Client Obligations */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              3. Client Obligations
            </h2>
            <p className="mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information necessary for service delivery</li>
              <li>Grant necessary access to systems and facilities during service hours</li>
              <li>Maintain appropriate hardware and software as specified in service agreements</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Ensure all third-party software licenses are valid and up-to-date</li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              4. Payment Terms
            </h2>
            <p className="mb-4">
              All services are subject to the following payment terms:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fees will be specified in individual service agreements</li>
              <li>Payment is due within 30 days of invoice date</li>
              <li>Late payments may incur interest at 1.5% per month</li>
              <li>Client is responsible for all applicable taxes</li>
              <li>Emergency services may require upfront payment</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              5. Intellectual Property
            </h2>
            <p className="mb-4">
              All pre-existing intellectual property remains the property of its respective owner. Any custom configurations, scripts, or documentation created specifically for Client during service delivery Deliverables shall be owned by Client upon full payment.
            </p>
            <p>
              Trace Network retains rights to methodologies, processes, and tools developed independently of specific client engagements.
            </p>
          </section>

          {/* Confidentiality */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              6. Confidentiality
            </h2>
            <p className="mb-4">
              Both parties agree to protect confidential information using reasonable security measures. Confidential information includes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Network configurations and topologies</li>
              <li>Security protocols and credentials</li>
              <li>Business processes and proprietary information</li>
              <li>Service methodologies and pricing</li>
            </ul>
            <p>
              This obligation survives termination of services for a period of 3 years.
            </p>
          </section>

          {/* Liability */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              7. Limitation of Liability
            </h2>
            <p className="mb-4">
              In no event shall Trace Network Support Services be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Damages exceeding the fees paid for the specific service in the preceding 6 months</li>
            </ul>
            <p>
              Exclusions apply except where prohibited by law. We maintain professional liability insurance covering errors and omissions.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              8. Termination
            </h2>
            <p className="mb-4">
              Services may be terminated:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>By either party with 30 days written notice</li>
              <li>Immediately for material breach of these Terms</li>
              <li>Upon Client insolvency or bankruptcy</li>
            </ul>
            <p>
              Upon termination, Client must pay for all services rendered up to termination date. Transition assistance may be provided at standard hourly rates.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              9. Governing Law
            </h2>
            <p className="mb-4">
              These Terms shall be governed by the laws of the State of California, without regard to its conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Santa Clara County, California.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              10. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of Services after changes constitutes acceptance.
            </p>
            <p>
              Material changes will be communicated via email 30 days prior to taking effect.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              11. Contact Information
            </h2>
            <p className="mb-4">
              For questions about these Terms, contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: legal@tracenetwork.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Park Drive, Suite 500, Silicon Valley, CA 94088</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;