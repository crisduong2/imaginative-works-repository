
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedLayout from '@/components/AnimatedLayout';
import { Project } from '@/components/ProjectCard';

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

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Project not found</h2>
          <Link 
            to="/" 
            className="px-6 py-3 bg-black text-white rounded-full font-medium text-sm tracking-wide hover:bg-black/90 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AnimatedLayout>
      <Navbar />
      
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to Projects
                </Link>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm text-gray-600">#{tag}</span>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-gray-600 max-w-3xl">
                  {project.description}
                </p>
              </div>
              
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-medium mb-16">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-medium mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  
                  <h3>The Challenge</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  <ul>
                    <li>Complex user journeys that needed simplification</li>
                    <li>Legacy design system that limited innovation</li>
                    <li>Balancing security requirements with usability</li>
                    <li>Creating a consistent experience across platforms</li>
                  </ul>
                  
                  <h3>The Approach</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  
                  <div className="my-10 grid grid-cols-2 gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036"
                      alt="Design Process"
                      className="rounded-lg shadow-soft"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070"
                      alt="User Research"
                      className="rounded-lg shadow-soft"
                    />
                  </div>
                  
                  <h3>The Solution</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                  <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="sticky top-32 bg-gray-50 dark:bg-gray-800/30 rounded-xl p-8">
                  <h3 className="text-xl font-medium mb-6">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Client</h4>
                      <p>FinTech Innovations Ltd.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Timeline</h4>
                      <p>3 months (Q2 2023)</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">My Role</h4>
                      <p>Lead Product Designer</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Deliverables</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>User Research</li>
                        <li>Wireframes</li>
                        <li>High-fidelity Mockups</li>
                        <li>Interactive Prototype</li>
                        <li>Design System</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 bg-black/5 rounded-full">Figma</span>
                        <span className="text-xs px-2 py-1 bg-black/5 rounded-full">Protopie</span>
                        <span className="text-xs px-2 py-1 bg-black/5 rounded-full">Maze</span>
                        <span className="text-xs px-2 py-1 bg-black/5 rounded-full">Notion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-20 px-6 bg-black text-white">
          <div className="container mx-auto max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Interested in working together?
              </h2>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium text-sm tracking-wide hover:bg-gray-100 transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </AnimatedLayout>
  );
};

export default ProjectDetail;
