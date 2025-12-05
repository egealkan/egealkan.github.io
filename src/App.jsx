// import { useState, useEffect, Suspense, lazy } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom'; // No BrowserRouter needed here
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Terminal from './components/ui/Terminal';
// import AnimatedBackground from './components/ui/AnimatedBackground';
// import CommandPalette from './components/ui/CommandPalette';


// // Lazy load the pages
// const Home = lazy(() => import('./pages/Home'));
// const Experience = lazy(() => import('./pages/Experience'));
// const Skills = lazy(() => import('./pages/Skills'));
// const Languages = lazy(() => import('./pages/Languages'));
// const Education = lazy(() => import('./pages/Education'));
// const PersonalInfo = lazy(() => import('./pages/PersonalInfo'));
// const Internship = lazy(() => import('./pages/Internship'));
// const About = lazy(() => import('./pages/About'));

// // 1. Scroll To Top Component
// const ScrollToTop = () => {
//   const { pathname } = useLocation();
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// // 2. Loading Component
// const PageLoader = () => (
//   <div style={{ 
//     display: 'flex', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     minHeight: '60vh',
//     width: '100%',
//     color: '#00ff00', 
//     fontSize: '1.2rem',
//     fontFamily: 'monospace'
//   }}>
//     &gt; Loading module...
//   </div>
// );

// function App() {
//   const [terminalOpen, setTerminalOpen] = useState(false);
//   const [paletteOpen, setPaletteOpen] = useState(false);
  
//   return (
//     <div className="app">
//       {/* Activates the scroll-to-top logic */}
//       <ScrollToTop />

//       <CommandPalette isOpen={paletteOpen} setIsOpen={setPaletteOpen} />
      
//       <AnimatedBackground />
//       <Header onOpenPalette={() => setPaletteOpen(true)} />
      
//       <main>
//         <Suspense fallback={<PageLoader />}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/languages" element={<Languages />} />
//             <Route path="/education" element={<Education />} />
//             <Route path="/personal-info" element={<PersonalInfo />} />
//             <Route path="/internship" element={<Internship />} />
//             <Route path="/about" element={<About />} />
            
//             {/* 3. Catch-all Route: Fixes the "Blank Page" issue */}
//             {/* If the URL doesn't match anything above, it goes to Home */}
//             <Route path="*" element={<Home />} />
//           </Routes>
//         </Suspense>
//       </main>
      
//       <Footer />
      
//       {/* Terminal Button & Component */}
//       <div className="terminal-toggle-container">
//         <button 
//           onClick={() => setTerminalOpen(true)}
//           className="terminal-toggle-btn"
//           aria-label="Open terminal"
//         >
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M8 9L11 12L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             <path d="M13 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
//         <div className="terminal-tooltip">Click for quick info about me</div>
//       </div>
      
//       <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
//     </div>
//   );
// }

// export default App;






import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Terminal from './components/ui/Terminal';
import AnimatedBackground from './components/ui/AnimatedBackground';
import CommandPalette from './components/ui/CommandPalette';

// Lazy load the pages
const Home = lazy(() => import('./pages/Home'));
const Experience = lazy(() => import('./pages/Experience'));
const Skills = lazy(() => import('./pages/Skills'));
const Languages = lazy(() => import('./pages/Languages'));
const Education = lazy(() => import('./pages/Education'));
const PersonalInfo = lazy(() => import('./pages/PersonalInfo'));
const Internship = lazy(() => import('./pages/Internship'));
const About = lazy(() => import('./pages/About'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '60vh',
    width: '100%',
    color: 'var(--color-primary-accent)', 
    fontSize: '1.2rem',
    fontFamily: 'monospace'
  }}>
    &gt; Loading module...
  </div>
);

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  
  // --- NEW: Theme State Logic ---
  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference on initial load
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Apply the theme attribute to the HTML root element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  // ------------------------------

  return (
    <div className="app">
      <ScrollToTop />
      <CommandPalette isOpen={paletteOpen} setIsOpen={setPaletteOpen} />
      <AnimatedBackground />
      
      {/* Pass theme props to Header */}
      <Header 
        onOpenPalette={() => setPaletteOpen(true)} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/education" element={<Education />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
      
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
      
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}

export default App;


// old variable css:
// :root {
//   /* Color Palette - Correct Hex Codes */
//   --color-white: #FFFFFF;
//   --color-midnight-blue: #00022d;
//   --color-dim-gray: #36454f;
//   --color-light-cream: #f7f7eb;
//   --color-dark-blue: #1c2d63;
//   --color-mustard-yellow: #cab955df;
  
//   /* Semantic Color Assignments */
//   --color-background: var(--color-white);
//   --color-card-background: var(--color-light-cream);
//   --color-primary-text: var(--color-dim-gray);
//   --color-heading-text: var(--color-midnight-blue);
//   --color-primary-accent: var(--color-dark-blue);
//   --color-secondary-accent: var(--color-mustard-yellow);
//   --color-border: rgba(54, 69, 79, 0.2);
//   --color-hover: rgba(28, 45, 99, 0.05);
  
//   /* Font families */
//   --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//   --font-mono: 'Fira Code', 'JetBrains Mono', monospace;
  
//   /* Spacing */
//   --spacing-xs: 0.25rem;
//   --spacing-sm: 0.5rem;
//   --spacing-md: 1rem;
//   --spacing-lg: 1.5rem;
//   --spacing-xl: 2rem;
//   --spacing-xxl: 3rem;
  
//   /* Transitions */
//   --transition-standard: all 0.3s ease;
  
//   /* Border radius */
//   --border-radius-sm: 4px;
//   --border-radius-md: 8px;
//   --border-radius-lg: 12px;
// }