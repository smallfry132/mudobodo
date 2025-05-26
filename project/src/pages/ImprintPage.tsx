import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export function ImprintPage() {
  return (
    <div>
      <div className="h-48 bg-secondary-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Imprint (Impressum)
          </h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <SectionHeading
            title="Legal Information"
            subtitle="In accordance with German law (§ 5 TMG)"
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="font-serif text-xl font-bold">Contact Information</h3>
            <p>
              Johannes Schmidt<br />
              Musterstraße 123<br />
              80333 Munich<br />
              Germany
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">Contact</h3>
            <p>
              Phone: +49 (0) 123 456789<br />
              Email: contact@johannesschmidt.com
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">Responsible for Content (§ 55 Abs. 2 RStV)</h3>
            <p>
              Johannes Schmidt<br />
              Musterstraße 123<br />
              80333 Munich<br />
              Germany
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">Liability for Content</h3>
            <p>
              The contents of this website have been created with the greatest possible care. However, I cannot guarantee the contents' accuracy, completeness, or topicality. According to statutory provisions, I am responsible for the content of this website. However, I am not obliged to monitor third-party information transmitted or stored on this website or to look for circumstances pointing to illegal activity.
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">Liability for Links</h3>
            <p>
              This website contains links to external third-party websites, over whose content I have no control. Therefore, I cannot accept any liability for these external contents. The respective provider or operator of the linked websites is always responsible for the content of the linked pages. The linked pages were checked for potential legal violations at the time the links were created. No illegal content was detected at the time the links were created.
            </p>
            
            <h3 className="font-serif text-xl font-bold mt-8">Copyright</h3>
            <p>
              The content and works created by the site operator on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law requires the prior written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}