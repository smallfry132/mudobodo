import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export function Hero({
  title,
  subtitle,
  imageSrc,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {(primaryAction || secondaryAction) && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryAction && (
              <Button
                as="a"
                href={primaryAction.href}
                variant="primary"
                size="lg"
                className="font-medium"
              >
                {primaryAction.label}
              </Button>
            )}
            
            {secondaryAction && (
              <Button
                as="a"
                href={secondaryAction.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 font-medium"
              >
                {secondaryAction.label}
              </Button>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
}