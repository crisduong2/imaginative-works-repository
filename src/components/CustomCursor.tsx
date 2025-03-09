
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/use-theme';

interface CustomCursorProps {
  cursorVariant?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ cursorVariant = "default" }) => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Cursor variants for different states
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(30, 30, 30, 0.2)',
      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(30, 30, 30, 0.4)'
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(30, 30, 30, 0.15)',
      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(30, 30, 30, 0.4)',
      mixBlendMode: theme === 'dark' ? 'difference' : 'normal'
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 30, 30, 0.1)',
      border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(30, 30, 30, 0.4)',
      mixBlendMode: theme === 'dark' ? 'difference' : 'normal'
    }
  };

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add hover effects to interactive elements
    const addHoverListeners = () => {
      const buttons = document.querySelectorAll('button, a, .clickable');
      
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover');
        });
        
        button.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover');
        });
      });
    };

    addHoverListeners();
    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      
      const buttons = document.querySelectorAll('button, a, .clickable');
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, [isVisible]);

  return (
    <motion.div
      className="cursor-dot fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      <motion.div 
        className="cursor-ring absolute -inset-1 rounded-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default CustomCursor;
