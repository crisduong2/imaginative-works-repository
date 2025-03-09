
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { category: 'Design', items: ['UI Design', 'UX Research', 'Prototyping', 'User Testing', 'Wireframing'] },
    { category: 'Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'] },
    { category: 'Development', items: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design', 'Accessibility'] },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1551032315-7ad40644e3e3?q=80&w=2070" 
                alt="Designer at Work" 
                className="w-full h-full object-cover rounded-xl shadow-medium"
              />
              
              <div className="absolute -bottom-8 -right-8 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-medium max-w-xs">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Great design is eliminating all unnecessary details."
                </p>
                <p className="text-sm font-medium mt-2">— Dieter Rams</p>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">7+ Years Experience</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Passionate about creating meaningful digital experiences
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <p>
                I'm a product designer with over 7 years of experience creating intuitive digital experiences
                for a variety of clients and industries. My approach combines research-driven insights with
                aesthetic sensibility to craft solutions that are both beautiful and functional.
              </p>
              <p>
                I believe that great design is not just about how things look, but how they work. My process
                starts with understanding user needs and business objectives, then crafting solutions that 
                address both with elegance and precision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-xl"
                >
                  <h3 className="text-lg font-medium mb-3">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="mr-2 text-black">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-black text-white rounded-full font-medium text-sm tracking-wide hover:bg-black/90 transition-all"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
