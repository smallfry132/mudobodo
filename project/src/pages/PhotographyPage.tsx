import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { PhotoGallery } from '../components/PhotoGallery';
import { photos, categories } from '../data/photos';

export function PhotographyPage() {
  return (
    <div>
      <div className="h-64 md:h-80 bg-gradient-to-r from-primary-800 to-secondary-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Photography Portfolio
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto px-4">
            Exploring the world through the lens, capturing moments, emotions, and stories
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <SectionHeading
          title="My Gallery"
          subtitle="A collection of my photographic work across different themes and subjects"
          centered
        />
        
        <PhotoGallery photos={photos} categories={categories} columns={3} />
      </div>
    </div>
  );
}