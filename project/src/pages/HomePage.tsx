import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Briefcase, User } from 'lucide-react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { PhotoGallery } from '../components/PhotoGallery';
import { photos, categories } from '../data/photos';
import { Button } from '../components/ui/Button';
import { experiences } from '../data/experience';

export function HomePage() {
  // Get only featured photos for home page
  const featuredPhotos = photos.filter(photo => photo.featured);
  
  // Get the most recent experiences (one of each type)
  const recentExperiences = [
    experiences.find(exp => exp.type === 'education'),
    experiences.find(exp => exp.type === 'work'),
    experiences.find(exp => exp.type === 'project'),
  ].filter(Boolean);

  return (
    <div>
      <Hero
        title="Capturing Moments, Creating Solutions"
        subtitle="Business Informatics student with a passion for photography and technology"
        imageSrc="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        primaryAction={{
          label: "View Photography",
          href: "/photography"
        }}
        secondaryAction={{
          label: "About Me",
          href: "/about"
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Featured Photography Section */}
        <section className="mb-24">
          <SectionHeading
            title="Featured Photography"
            subtitle="A selection of my best work capturing moments and emotions through the lens"
            centered
          />
          
          <PhotoGallery 
            photos={featuredPhotos} 
            categories={[{ id: 'all', name: 'All' }]} 
            columns={3}
          />
          
          <div className="text-center mt-12">
            <Button as={Link} to="/photography" variant="outline">
              View Full Gallery
            </Button>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="mb-24">
          <SectionHeading
            title="What I Do"
            subtitle="Bridging the gap between business and technology while pursuing creative passions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full mb-6">
                <Camera size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">Photography</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Capturing moments, emotions, and stories through the lens with a focus on nature, architecture, and urban landscapes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">Business Informatics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bridging the gap between technology and business needs through analysis, system design, and process optimization.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full mb-6">
                <User size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-4">About Me</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate about blending analytical thinking with creative expression, always seeking to learn and grow in both fields.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Preview Section */}
        <section>
          <SectionHeading
            title="Professional Experience"
            subtitle="A glimpse into my educational background, work experience, and projects"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {recentExperiences.map((exp, index) => (
              <motion.div
                key={exp?.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-primary-600"
              >
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp?.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {exp?.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {exp?.startDate} - {exp?.endDate || 'Present'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4 line-clamp-3">
                  {exp?.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button as={Link} to="/experience" variant="outline">
              View Full Experience
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}