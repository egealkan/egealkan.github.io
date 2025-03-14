import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Terminal from './components/ui/Terminal';
import AnimatedBackground from './components/ui/AnimatedBackground';
import MouseFollower from './components/ui/MouseFollower';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Languages from './pages/Languages';
import Education from './pages/Education';
import PersonalInfo from './pages/PersonalInfo';

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [konami, setKonami] = useState(false);
  
  // Track keypresses for Easter egg
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Z key to trigger Easter egg
      if (e.key.toLowerCase() === 'z') {
        setKonami(true);
        setTimeout(() => setKonami(false), 5000);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };
  
  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'} ${konami ? 'konami-mode' : ''}`}>
        <AnimatedBackground />
        <MouseFollower />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/education" element={<Education />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Easter egg hint */}
        <div className="easter-egg-hint">Press 'Z' to discover a secret...</div>
        
        {/* Easter egg content */}
        {konami && (
          <div className="konami-easter-egg">
            <div className="konami-content">
              <h3>You found the secret! 🎉</h3>
              <p>As a reward, here's a secret fact: This portfolio was created with React and Vite!</p>
              <div className="konami-animation">⭐</div>
            </div>
          </div>
        )}
        
        {/* Terminal toggle button with tooltip */}
        <div className="terminal-toggle-container">
          <button 
            onClick={() => setTerminalOpen(true)}
            className="terminal-toggle-btn"
            aria-label="Open terminal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9L11 12L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="terminal-tooltip">Click for quick info about me</div>
        </div>
        
        {/* Terminal component */}
        <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;