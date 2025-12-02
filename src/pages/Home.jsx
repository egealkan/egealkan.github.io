import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReadingProgressBar from '../components/ui/ReadingProgressBar';
import ScrollReveal from '../components/ui/ScrollReveal';
import './Home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [cursorBlinking, setCursorBlinking] = useState(true);
  const fullName = 'Egemen Alkan';
  
  useEffect(() => {
    if (typedText.length < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullName.slice(0, typedText.length + 1));
        setCursorBlinking(false);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      setCursorBlinking(true);
    }
  }, [typedText, fullName]);

  return (
    <div className="home-page">
      <ReadingProgressBar />
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hello, I am {typedText}
                <span className={`cursor ${cursorBlinking ? 'blinking' : ''}`}></span>
              </h1>
              
              <h2 className="hero-subtitle">
                Aspiring AI Developer / Data Engineer
              </h2>
              
              <p className="hero-description">
                Dedicated university student with a passion for AI and Deep Learning. Experienced
                in coding, problem-solving, and team management, I've been a part of academic and volunteer
                projects to deliver impactful results.
              </p>
              
              <div className="hero-buttons">
                <Link to="/experience" className="btn btn-primary">View Projects</Link>
                <Link to="/skills" className="btn btn-secondary">
                  Explore Skills
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="hero-visual">
            <div className="character-card">
                <div className="card-background rotate-1"></div>
                <div className="card-background rotate-2"></div>
                <div className="card-content">
                <div className="avatar">
                    <img 
                    src="/profile-picture.jpg" 
                    alt="Egemen Alkan" 
                    className="avatar-image"
                    />
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
        </div>
      </section>

      
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Proud Achievements</h2>
          <p className="section-subtitle">Key milestones and impactful contributions</p>
          
          <div className="achievements-grid">
            <div className="achievement-item">
              <h3 className="achievement-title">Certificate for Complete Math, Statistics & Probability for Machine Learning
              </h3>
              <p className="achievement-period">2025</p>
              <p className="achievement-description">
              Completion of a highly comprehensive Mathematics, Statistics, and Probability course, I learned everything from Set theory, 
              Combinatorics, Probability, statistics, and linear algebra to Calculus with tons of challenges and solutions for Business Analytics, 
              Data Science, Data Analytics, Machine Learning, and AI.<br></br><br></br>
              <a href="https://www.udemy.com/certificate/UC-dd7b353a-937b-4aa2-8951-d6bad67b5d40/" target="_blank" rel="noopener noreferrer" className="linkedin-link">Link to Certificate</a>
              </p>
              <div className="achievement-tags">
                <span className="achievement-tag">ML</span>
                <span className="achievement-tag">AI</span>
                <span className="achievement-tag">Statistics</span>
                <span className="achievement-tag">Probability</span>
                <span className="achievement-tag">Linear Algebra</span>
                <span className="achievement-tag">Calculus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;