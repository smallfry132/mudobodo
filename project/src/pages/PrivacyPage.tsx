import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export function PrivacyPage() {
  return (
    <div>
      <div className="h-48 bg-primary-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <SectionHeading
            title="Data Protection"
            subtitle="Information in accordance with GDPR (DSGVO)"
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="font-serif text-xl font-bold">1. Overview</h3>
            <p>
              This privacy policy provides information about the type, scope, and purpose of the processing of personal data on this website by the responsible operator. The legal basis for data protection can be found in the General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">2. Responsible Entity</h3>
            <p>
              Johannes Schmidt<br />
              Musterstraße 123<br />
              80333 Munich<br />
              Germany<br />
              Email: contact@johannesschmidt.com
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">3. Your Rights</h3>
            <p>
              You have the following rights regarding your personal data:
            </p>
            <ul>
              <li>Right to information</li>
              <li>Right to rectification or deletion</li>
              <li>Right to restriction of processing</li>
              <li>Right to object to processing</li>
              <li>Right to data portability</li>
            </ul>
            <p>
              You also have the right to complain to a data protection supervisory authority about the processing of your personal data.
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">4. Collection of Access Data</h3>
            <p>
              When you visit this website, access data is automatically collected and stored in the server log files. This data includes the name of the accessed website, files, date and time of access, amount of data transferred, notification of successful access, browser type and version, the user's operating system, referrer URL, and the requesting IP address.
            </p>
            <p>
              This data is stored for security reasons and to ensure the stability and operational reliability of the system. The legal basis for the temporary storage is Art. 6 Para. 1 lit. f GDPR.
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">5. Cookies</h3>
            <p>
              This website uses cookies. Cookies are small text files that are stored on your device and saved by your browser. They serve to make our website more user-friendly, effective, and secure. 
            </p>
            <p>
              You can set your browser to inform you about the placement of cookies, to allow cookies only in individual cases, to exclude the acceptance of cookies for certain cases or in general, and to activate the automatic deletion of cookies when closing the browser.
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">6. Contact Form and Email Contact</h3>
            <p>
              If you send us inquiries via the contact form or email, your details from the inquiry form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">7. Social Media</h3>
            <p>
              This website contains links to external social media platforms. When you click on these links, you will be redirected to the respective platform. We have no influence on the data collected by these platforms. Please refer to the privacy policies of the respective providers.
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">8. Changes to this Privacy Policy</h3>
            <p>
              We reserve the right to amend this privacy policy to always comply with the current legal requirements or to implement changes to our services in the privacy policy, e.g., when introducing new services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}