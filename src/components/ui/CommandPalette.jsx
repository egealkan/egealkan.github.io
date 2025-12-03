// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsSearch, BsArrowReturnLeft } from "react-icons/bs";
// import { VscChromeClose } from "react-icons/vsc";
// import Toast from './Toast'; 
// import './CommandPalette.css';

// const CommandPalette = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [toast, setToast] = useState(null); 
//   const inputRef = useRef(null);
//   const navigate = useNavigate();

//   const commands = [
//     { id: 'home', label: 'Go to Home', icon: '🏠', action: () => navigate('/') },
//     { 
//         id: 'email', 
//         label: 'Copy Email', 
//         icon: '📧', 
//         action: () => {
//           navigator.clipboard.writeText('r0913387@student.thomasmore.be');
//           // Close palette AND show toast
//           setIsOpen(false);
//           setToast({ msg: 'Email copied to clipboard!', type: 'success' });
//         }
//       },
//     { id: 'exp', label: 'Experience', icon: '💼', action: () => navigate('/experience') },
//     { id: 'skills', label: 'Technical Skills', icon: '⚡', action: () => navigate('/skills') },
//     { id: 'projects', label: 'Internship Projects', icon: '🚀', action: () => navigate('/internship') },
//     { id: 'edu', label: 'Education', icon: '🎓', action: () => navigate('/education') },
//     { id: 'cv', label: 'View Resume (CV)', icon: '📄', action: () => window.open('/Egemen_Alkan_CV.pdf', '_blank') },
//   ];

//   const filteredCommands = commands.filter(cmd => 
//     cmd.label.toLowerCase().includes(query.toLowerCase())
//   );

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
//         e.preventDefault();
//         setIsOpen(prev => !prev);
//       }
//       if (e.key === 'Escape') {
//         setIsOpen(false);
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus();
//       setQuery('');
//       setSelectedIndex(0);
//     }
//   }, [isOpen]);

//   const handleNavigation = (e) => {
//     if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
//     } else if (e.key === 'Enter') {
//       e.preventDefault();
//       if (filteredCommands.length > 0) {
//         filteredCommands[selectedIndex].action();
//         if (filteredCommands[selectedIndex].id !== 'email') {
//              setIsOpen(false);
//         }
//       }
//     }
//   };

//   // Logic: If Palette is closed AND no toast is showing, don't render anything.
//   if (!isOpen && !toast) return null;

//   return (
//     <>
//       {/* 1. The Overlay (Only render if open) */}
//       {isOpen && (
//         <div className="palette-overlay" onClick={() => setIsOpen(false)}>
//           <div className="palette-modal" onClick={e => e.stopPropagation()}>
//             <div className="palette-header">
//               <BsSearch className="palette-search-icon" />
//               <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="Type a command..."
//                 value={query}
//                 onChange={e => {
//                   setQuery(e.target.value);
//                   setSelectedIndex(0);
//                 }}
//                 onKeyDown={handleNavigation}
//                 className="palette-input"
//               />
//               <button className="palette-close-btn" onClick={() => setIsOpen(false)}>
//                 <VscChromeClose />
//               </button>
//             </div>
            
//             <div className="palette-results">
//               {filteredCommands.length > 0 ? (
//                 filteredCommands.map((cmd, index) => (
//                   <div
//                     key={cmd.id}
//                     className={`palette-item ${index === selectedIndex ? 'active' : ''}`}
//                     onClick={() => {
//                       cmd.action();
//                       if(cmd.id !== 'email') setIsOpen(false);
//                     }}
//                     onMouseEnter={() => setSelectedIndex(index)}
//                   >
//                     <span className="item-icon">{cmd.icon}</span>
//                     <span className="item-label">{cmd.label}</span>
//                     {index === selectedIndex && <BsArrowReturnLeft className="item-enter" />}
//                   </div>
//                 ))
//               ) : (
//                 <div className="palette-no-results">No results found.</div>
//               )}
//             </div>
            
//             <div className="palette-footer">
//               <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
//               <span><kbd>↵</kbd> to select</span>
//               <span><kbd>esc</kbd> to close</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 2. The Toast Notification (Render if toast exists) */}
//       {toast && (
//         <Toast 
//           message={toast.msg} 
//           type={toast.type} 
//           onClose={() => setToast(null)} 
//         />
//       )}
//     </>
//   );
// };

// export default CommandPalette;








import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch, BsArrowReturnLeft } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import Toast from './Toast'; 
import './CommandPalette.css';

// 1. Accept props here
const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toast, setToast] = useState(null); 
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const commands = [
    { id: 'home', label: 'Go to Home', icon: '🏠', action: () => navigate('/') },
    { 
        id: 'email', 
        label: 'Copy Email', 
        icon: '📧', 
        action: () => {
          navigator.clipboard.writeText('r0913387@student.thomasmore.be');
          setIsOpen(false);
          setToast({ msg: 'Email copied to clipboard!', type: 'success' });
        }
      },
    { id: 'exp', label: 'Experience', icon: '💼', action: () => navigate('/experience') },
    { id: 'skills', label: 'Technical Skills', icon: '⚡', action: () => navigate('/skills') },
    { id: 'projects', label: 'Internship Projects', icon: '🚀', action: () => navigate('/internship') },
    { id: 'edu', label: 'Education', icon: '🎓', action: () => navigate('/education') },
    { id: 'cv', label: 'View Resume (CV)', icon: '📄', action: () => window.open('/Egemen_Alkan_CV.pdf', '_blank') },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // 2. Use setIsOpen prop to toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]); 

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleNavigation = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands.length > 0) {
        filteredCommands[selectedIndex].action();
        if (filteredCommands[selectedIndex].id !== 'email') {
             setIsOpen(false);
        }
      }
    }
  };

  if (!isOpen && !toast) return null;

  return (
    <>
      {isOpen && (
        <div className="palette-overlay" onClick={() => setIsOpen(false)}>
          <div className="palette-modal" onClick={e => e.stopPropagation()}>
            <div className="palette-header">
              <BsSearch className="palette-search-icon" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command..."
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleNavigation}
                className="palette-input"
              />
              <button className="palette-close-btn" onClick={() => setIsOpen(false)}>
                <VscChromeClose />
              </button>
            </div>
            
            <div className="palette-results">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => (
                  <div
                    key={cmd.id}
                    className={`palette-item ${index === selectedIndex ? 'active' : ''}`}
                    onClick={() => {
                      cmd.action();
                      if(cmd.id !== 'email') setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <span className="item-icon">{cmd.icon}</span>
                    <span className="item-label">{cmd.label}</span>
                    {index === selectedIndex && <BsArrowReturnLeft className="item-enter" />}
                  </div>
                ))
              ) : (
                <div className="palette-no-results">No results found.</div>
              )}
            </div>
            
            <div className="palette-footer">
              <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
              <span><kbd>↵</kbd> to select</span>
              <span><kbd>esc</kbd> to close</span>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <Toast 
          message={toast.msg} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </>
  );
};

export default CommandPalette;