import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  level?: number;
  experience?: number;
}

const Hero = ({ 
  name, 
  title, 
  description, 
  level = 1, 
  experience = 50 
}: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const [cursorBlinking, setCursorBlinking] = useState(true);
  
  // Typing animation effect
  useEffect(() => {
    if (typedText.length < name.length) {
      const timeout = setTimeout(() => {
        setTypedText(name.slice(0, typedText.length + 1));
        setCursorBlinking(false);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      setCursorBlinking(true);
    }
  }, [typedText, name]);

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className={styles.contentWrapper}>
            <div className={styles.levelBadge}>
              <span className={styles.levelText}>Level {level}</span>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${experience}%` }}
                ></div>
              </div>
            </div>
            
            <h1 className={styles.title}>
              Hello, I am {typedText}
              <span className={`${styles.cursor} ${cursorBlinking ? styles.blinking : ''}`}></span>
            </h1>
            
            <h2 className={styles.subtitle}>{title}</h2>
            
            <p className={styles.description}>{description}</p>
            
            <div className={styles.buttonsWrapper}>
              <button className={styles.primaryButton}>
                Start Mission
              </button>
              
              <button className={styles.secondaryButton}>
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.characterCard}>
            <div className={`${styles.cardBackground} ${styles.backgroundRotate1}`}></div>
            <div className={`${styles.cardBackground} ${styles.backgroundRotate2}`}></div>
            <div className={styles.cardContent}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '96px', 
                  height: '96px', 
                  margin: '0 auto 16px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(100, 255, 218, 0.2)',
                  border: '1px solid rgba(100, 255, 218, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#64FFDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#64FFDA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ height: '8px', width: '80%', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '100%', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }}></div>
                  <div style={{ height: '8px', width: '60%', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to explore</span>
        <div className={styles.mouseIcon}>
          <div className={styles.mouseWheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;