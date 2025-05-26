import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, Linkedin, Github } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { aboutInfo, socialLinks } from '../data/about';

export function AboutPage() {
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
    <div>
      <div className="h-64 md:h-80 bg-gradient-to-r from-secondary-700 via-primary-700 to-accent-700 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto px-4">
            Learn more about who I am, my passions, and my journey
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Johannes Schmidt"
              subtitle={aboutInfo.title}
            />
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {aboutInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
                <span>{aboutInfo.location}</span>
              </div>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
                <a href={`mailto:${aboutInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                  {aboutInfo.email}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-colors"
                    aria-label={link.platform}
                  >
                    {getIconComponent(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutInfo.imageUrl}
                alt={aboutInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-100 dark:bg-primary-900 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary-100 dark:bg-secondary-900 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}