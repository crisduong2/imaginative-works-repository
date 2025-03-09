
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: '1',
      title: 'Mobile Banking App Redesign',
      description: 'A comprehensive redesign of a banking application focused on simplicity and user experience.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      category: 'UX/UI Design',
      tags: ['Mobile', 'Fintech', 'UI Design']
    },
    {
      id: '2',
      title: 'E-commerce Website',
      description: 'A minimalist e-commerce platform with focus on product presentation and seamless checkout.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      category: 'Web Design',
      tags: ['E-commerce', 'Web', 'UI Design']
    },
    {
      id: '3',
      title: 'Smart Home IoT Dashboard',
      description: 'An intuitive dashboard for managing connected home devices with data visualization.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064',
      category: 'Dashboard',
      tags: ['IoT', 'Dashboard', 'Data Viz']
    },
    {
      id: '4',
      title: 'Fitness Tracking App',
      description: 'A mobile application for tracking workouts, nutrition, and wellness metrics.',
      image: 'https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=2073',
      category: 'UX/UI Design',
      tags: ['Mobile', 'Health', 'UX Research']
    },
    {
      id: '5',
      title: 'Educational Platform',
      description: 'A comprehensive learning management system with course creation and student engagement tools.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
      category: 'Web Design',
      tags: ['Education', 'Web App', 'UX Design']
    },
    {
      id: '6',
      title: 'Travel Booking Platform',
      description: 'A streamlined booking experience for travel accommodations and experiences.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021',
      category: 'UX/UI Design',
      tags: ['Travel', 'Web', 'Mobile']
    },
  ];

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category.toLowerCase())))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Explore my recent design projects spanning various industries and platforms,
            each crafted with attention to detail and user-centered principles.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-black text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 border border-black/10 hover:border-black/30 rounded-full font-medium text-sm tracking-wide transition-all"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
