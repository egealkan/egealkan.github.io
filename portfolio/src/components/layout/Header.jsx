import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    
    if (window.confirm("Are you sure you want to download Egemen's CV?")) {
      // Create a link element
      const link = document.createElement('a');
      
      // Set the href to the path of your CV file
      // Note: Place your CV file in the public folder of your React project
      link.href = '/Egemen_Alkan_CV.pdf';
      
      // Set download attribute
      link.download = 'Egemen_Alkan_CV.pdf';
      
      // Append to the document
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <NavLink to="/">EA</NavLink>
          <div className="logo-effect"></div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/languages" className={({ isActive }) => isActive ? 'active' : ''}>
                Languages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/personal-info" className={({ isActive }) => isActive ? 'active' : ''}>
                Personal Info
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <button onClick={handleDownloadCV} className="btn btn-primary download-btn">Download CV</button>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;