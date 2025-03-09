import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/hooks/use-theme';
import { Moon, Sun } from 'lucide-react';
import { fadeIn, staggerContainer, buttonHover } from '@/lib/animations';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinkVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-in-out',
        scrolled
          ? 'glass border-b border-gray-200/20 backdrop-blur-lg py-3'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-medium tracking-tight">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-gradient"
            >
              Studio.
            </motion.div>
          </Link>

          <motion.nav 
            className="hidden md:flex space-x-10"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={navLinkVariants}
                transition={{ delay: index * 0.1 }}
              >
                <HashLink
                  to={link.path}
                  className={cn(
                    'relative py-2 text-sm transition-colors duration-300 hover:text-black/80 dark:hover:text-white/80',
                    (location.pathname === link.path || 
                     (location.pathname === '/' && location.hash === link.path.substring(1))) 
                      ? 'text-black dark:text-white font-medium' 
                      : 'text-gray-600 dark:text-gray-400'
                  )}
                >
                  <span>{link.name}</span>
                  {(location.pathname === link.path || 
                   (location.pathname === '/' && location.hash === link.path.substring(1))) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </HashLink>
              </motion.div>
            ))}
          </motion.nav>

          <div className="hidden md:flex space-x-4 items-center">
            <motion.button
              {...buttonHover}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </motion.button>
            
            <motion.button
              {...buttonHover}
              className="px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-all hover:bg-black/90 dark:hover:bg-white/90"
            >
              Resume
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              {...buttonHover}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </motion.button>
            
            <motion.button 
              {...buttonHover}
              onClick={toggleMobileMenu}
              className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass mt-3 p-4 rounded-lg mx-3 dark:bg-gray-800/70 dark:border-gray-700/20"
          >
            <motion.nav 
              className="flex flex-col space-y-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={navLinkVariants}
                  transition={{ delay: index * 0.05 }}
                >
                  <HashLink
                    to={link.path}
                    className={cn(
                      'py-2 text-sm font-medium transition-colors duration-300',
                      (location.pathname === link.path || 
                      (location.pathname === '/' && location.hash === link.path.substring(1))) 
                        ? 'text-black dark:text-white font-medium' 
                        : 'text-gray-600 dark:text-gray-400'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </HashLink>
                </motion.div>
              ))}
              <motion.button
                variants={navLinkVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-all hover:bg-black/90 dark:hover:bg-white/90"
              >
                Resume
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
