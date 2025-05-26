import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github, Heart } from 'lucide-react';
import { socialLinks } from '../data/about';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Map icon strings to actual Lucide components
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'Instagram':
        return <Instagram size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Github':
        return <Github size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary-50 dark:bg-gray-900 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white mb-4">
              Johannes Schmidt
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Capturing moments through photography while navigating the world of business and technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.platform}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/photography" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                  Photography
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/imprint" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                  Imprint
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Johannes Schmidt. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-red-500" /> in Munich, Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}