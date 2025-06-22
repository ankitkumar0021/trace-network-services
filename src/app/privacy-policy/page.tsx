import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg_gradient text-gray-300 min-h-screen py-16 ">
      <div className='custom_container_margin'>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-400">
            Effective Date: June 20, 2025
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              1. Introduction
            </h2>
            <p className="mb-4">
              Trace Network Support Services (we, us, or our) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website tracenetwork.com or use our services.
            </p>
            <p>
              By accessing our website or services, you consent to the data practices described in this policy. If you do not agree, please do not access or use our services.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Personal Information</h3>
            <p className="mb-4">
              We may collect personally identifiable information when you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Request services or consultations</li>
              <li>Contact us via forms, email, or phone</li>
              <li>Register for an account</li>
              <li>Subscribe to newsletters</li>
            </ul>
            <p className="mb-4">
              This may include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Name, email, phone number, company details</li>
              <li>Billing and payment information</li>
              <li>Network configuration details for service delivery</li>
              <li>Credentials for remote access (securely stored and encrypted)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-blue-300">Technical Information</h3>
            <p className="mb-4">
              We automatically collect certain information when you visit our website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, time spent, navigation paths</li>
              <li>Error logs and performance data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* Use of Information */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use collected information for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Processing transactions and sending invoices</li>
              <li>Responding to inquiries and support requests</li>
              <li>Monitoring network security and performance</li>
              <li>Sending technical notices, updates, and security alerts</li>
              <li>Improving our website, services, and customer experience</li>
              <li>Sending marketing communications (with opt-out option)</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><span className="font-semibold">Service Providers:</span> Third parties who assist in delivering our services (e.g., payment processors, cloud hosting providers)</li>
              <li><span className="font-semibold">Business Partners:</span> When necessary for joint service delivery (with confidentiality agreements)</li>
              <li><span className="font-semibold">Legal Requirements:</span> When required by law or to protect our rights</li>
              <li><span className="font-semibold">Business Transfers:</span> In connection with merger, acquisition, or sale of assets</li>
            </ul>
            <p>
              We require all third parties to respect your privacy and handle data according to our security standards.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              5. Data Security
            </h2>
            <p className="mb-4">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of sensitive data in transit and at rest (AES-256)</li>
              <li>Secure network architecture with firewalls and intrusion detection</li>
              <li>Regular security audits and vulnerability testing</li>
              <li>Access controls and authentication protocols</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              While we strive to protect your information, no electronic transmission is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              6. Data Retention
            </h2>
            <p className="mb-4">
              We retain personal information only as long as necessary for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fulfilling the purposes outlined in this policy</li>
              <li>Complying with legal obligations (e.g., tax, accounting)</li>
              <li>Resolving disputes and enforcing agreements</li>
            </ul>
            <p>
              Technical logs are retained for 6 months. Client service data is retained for 7 years after contract termination for compliance.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              7. Your Privacy Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, contact us at privacy@tracenetwork.com. We may require identity verification.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar technologies for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Authentication and security</li>
              <li>Website functionality</li>
              <li>Performance monitoring</li>
              <li>Analytics to improve our services</li>
            </ul>
            <p className="mb-4">
              You can control cookies through browser settings. Disabling cookies may affect website functionality.
            </p>
            <p>
              We use Google Analytics to analyze traffic. You can opt-out via <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-400 hover:underline">Google&apos;s opt-out tool</a>.
            </p>
          </section>

          {/* International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              9. International Data Transfers
            </h2>
            <p className="mb-4">
              As a global provider, your information may be transferred to and processed in countries outside your residence. We ensure:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Appropriate safeguards are in place (e.g., Standard Contractual Clauses)</li>
              <li>Recipient countries provide adequate data protection</li>
              <li>Data is protected according to this policy regardless of location</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              10. Children&apos;Privacy
            </h2>
            <p className="mb-4">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we learn we have collected such information, we will delete it immediately.
            </p>
          </section>

          {/* Policy Changes */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              11. Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this policy periodically. The &apos;Effective Date&apos; at the top indicates when revisions were made. Material changes will be notified via email or website notice 30 days before taking effect.
            </p>
            <p>
              We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              12. Contact Us
            </h2>
            <p className="mb-4">
              For privacy-related inquiries or to exercise your rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: privacy@tracenetwork.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Park Drive, Suite 500, Silicon Valley, CA 94088</li>
              <li>Data Protection Officer: dpo@tracenetwork.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;