import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { experiences } from '../data/experience';

export function ExperiencePage() {
  return (
    <div>
      <div className="h-64 md:h-80 bg-gradient-to-r from-secondary-800 to-primary-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto px-4">
            My educational journey, work experience, and projects in the field of Business Informatics
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <SectionHeading
          title="Professional Timeline"
          subtitle="A chronological overview of my academic and professional journey"
          centered
        />
        
        <ExperienceTimeline experiences={experiences} />
      </div>
    </div>
  );
}