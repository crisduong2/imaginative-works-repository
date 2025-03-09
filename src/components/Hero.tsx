
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonHover } from '@/lib/animations';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        if (el instanceof HTMLElement) {
          el.style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center py-12 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/30 dark:from-gray-900 dark:to-gray-800/30">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-10 -right-10 w-72 h-72 bg-gray-200/50 dark:bg-gray-800/20 rounded-full blur-3xl parallax" 
          data-speed="0.5"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-2/3 -left-10 w-72 h-72 bg-gray-200/50 dark:bg-gray-800/20 rounded-full blur-3xl parallax" 
          data-speed="0.7"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gray-200/30 dark:bg-gray-800/10 rounded-full blur-3xl parallax" 
          data-speed="0.3"
        />
      </div>
      
      <div className="container mx-auto max-w-7xl z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm font-medium"
            >
              Product Designer
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-balance"
            >
              Creating digital{' '}
              <span className="text-gradient relative">
                experiences
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                />
              </span> that matter
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
            >
              I'm a product designer specializing in creating intuitive, user-centered digital experiences 
              that seamlessly blend aesthetics with functionality.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                {...buttonHover}
                className="px-6 py-3 bg-black text-white rounded-full font-medium text-sm tracking-wide hover:bg-black/90 transition-all"
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                {...buttonHover}
                className="px-6 py-3 border border-black/10 hover:border-black/30 rounded-full font-medium text-sm tracking-wide transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="lg:w-1/2 relative w-full h-full flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 glass-card rounded-3xl overflow-hidden shadow-medium parallax" 
                data-speed="0.2"
              >
                <div className="w-full h-full bg-noise opacity-50"></div>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-soft parallax" data-speed="0.1">
                  <img 
                    src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070" 
                    alt="Design Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ y: 20, x: 20, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-gray-100 rounded-2xl shadow-soft overflow-hidden parallax" 
                data-speed="0.4"
              >
                <img 
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2069" 
                  alt="Design Tools" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ y: -20, x: -20, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-soft overflow-hidden parallax" 
                data-speed="0.3"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070" 
                  alt="Design Elements" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
