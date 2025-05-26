import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Small delay to improve UX - don't show immediately on page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white">Cookie Consent</h3>
        <button 
          onClick={handleReject}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        This website uses cookies to enhance your browsing experience and analyze site traffic in accordance with our Privacy Policy and German GDPR regulations.
      </p>
      <div className="flex flex-col xs:flex-row gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleReject}
          className="text-sm justify-center"
        >
          Reject All
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={handleAccept}
          className="text-sm justify-center"
        >
          Accept Cookies
        </Button>
      </div>
    </motion.div>
  );
}