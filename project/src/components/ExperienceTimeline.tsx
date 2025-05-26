import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Code } from 'lucide-react';
import { Experience } from '../types';
import { Button } from './ui/Button';
import { cn } from '../utils/cn';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [filter, setFilter] = useState<'all' | 'education' | 'work' | 'project'>('all');
  
  const filteredExperiences = experiences.filter(exp => 
    filter === 'all' || exp.type === filter
  ).sort((a, b) => {
    // Sort by startDate in descending order (most recent first)
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'education':
        return <Calendar size={20} />;
      case 'work':
        return <Briefcase size={20} />;
      case 'project':
        return <Code size={20} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Button
          variant={filter === 'all' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'education' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('education')}
        >
          <Calendar size={16} className="mr-1" />
          Education
        </Button>
        <Button
          variant={filter === 'work' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('work')}
        >
          <Briefcase size={16} className="mr-1" />
          Work
        </Button>
        <Button
          variant={filter === 'project' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter('project')}
        >
          <Code size={16} className="mr-1" />
          Projects
        </Button>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-12">
          {filteredExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col md:flex-row md:justify-between gap-4",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white z-10">
                {getTypeIcon(experience.type)}
              </div>

              {/* Content box */}
              <div 
                className={cn(
                  "w-full md:w-[calc(50%-2rem)] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md",
                  "border-l-4 border-primary-600",
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {experience.company} • {experience.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {experience.startDate} - {experience.endDate || 'Present'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{experience.description}</p>
                
                {experience.skills && experience.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Placeholder for alignment */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}