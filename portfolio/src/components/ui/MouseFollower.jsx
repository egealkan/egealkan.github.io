import { useEffect, useState } from 'react';
import './MouseFollower.css';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  
  useEffect(() => {
    // Show the cursor after a brief delay (to avoid initial position jump)
    const showTimeout = setTimeout(() => {
      setHidden(false);
    }, 500);
    
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setClicked(true);
    };
    
    const handleMouseUp = () => {
      setClicked(false);
    };
    
    // Hide the cursor when it leaves the window
    const handleMouseLeave = () => {
      setHidden(true);
    };
    
    // Show the cursor when it enters the window
    const handleMouseEnter = () => {
      setHidden(false);
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      clearTimeout(showTimeout);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  return (
    <>
      <div 
        className={`mouse-follower ${clicked ? 'clicked' : ''} ${hidden ? 'hidden' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`mouse-follower-ring ${clicked ? 'clicked' : ''} ${hidden ? 'hidden' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default MouseFollower;