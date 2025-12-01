import { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate total scrollable height
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      
      // Calculate current scroll position
      const currentPosition = window.scrollY;
      
      // Avoid division by zero
      if (totalHeight === 0) return;

      // Calculate percentage
      const progress = (currentPosition / totalHeight) * 100;
      setWidth(progress);
    };

    // Attach listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${width}%`,
      height: '6px', // Slightly thicker to be visible
      // Use your existing CSS variable or a hardcoded fallback color
      background: 'linear-gradient(90deg, var(--color-primary-accent, #00022d), var(--color-secondary-accent, #cab955df))',
      zIndex: 9999,
      transition: 'width 0.1s ease-out',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)'
    }} />
  );
};

export default ReadingProgressBar;