// import { useState, useEffect, useRef } from 'react';
// import './Terminal.css';

// const Terminal = ({ isOpen, onClose }) => {
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const inputRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     if (isOpen) {
//       inputRef.current?.focus();
      
//       // Add welcome message
//       setHistory([
//         { 
//           command: '', 
//           output: 'Welcome to Egemen\'s terminal. Type "help" for available commands.' 
//         }
//       ]);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     // Scroll to bottom when history changes
//     if (contentRef.current) {
//       contentRef.current.scrollTop = contentRef.current.scrollHeight;
//     }
//   }, [history]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!input.trim()) return;
    
//     // Add command to history
//     const newHistory = [...history, { command: input, output: '' }];
//     setHistory(newHistory);
    
//     // Process command
//     processCommand(input, newHistory);
    
//     // Reset input and history navigation
//     setInput('');
//     setHistoryIndex(-1);
//   };

//   const processCommand = (cmd, currentHistory) => {
//     const command = cmd.trim().toLowerCase();
//     let output = '';
    
//     // Command processing
//     if (command === 'help') {
//       output = `
// Available commands:
//   help - Show this help message
//   about - Learn about me
//   skills - List my skills
//   projects - View my projects
//   education - View my educational background
//   contact - Get contact information
//   languages - Show language proficiency
//   interests - Show my personal interests
//   clear - Clear terminal
//   exit - Close terminal
//       `;
//     } else if (command === 'about') {
//       output = `
// Applied Computer Science student specializing in Artificial Intelligence.

// I focus on leveraging AI technologies to solve complex problems, with expertise in 
// machine learning, deep learning, and data science. Since 2019, I've been developing 
// my skills through hands-on projects that demonstrate my ability to create innovative 
// solutions with real-world applications.

// My technical foundation combines AI expertise with strong software development skills.
//       `;
//     } else if (command === 'skills') {
//       output = `
// Skills:
//   • AI & Data: Deep Learning, NLP, Computer Vision, Machine Learning, Data Science
//   • Development: Python, Java, JavaScript, React, .NET, PHP, C#
//   • Data Tools: AWS, BI, Qlik Sense, Data Visualization, Data Engineering
//   • Math/CS: Statistics, Algorithms, Linear Algebra, Discrete Mathematics
//   • Web: HTML/CSS, Frontend/Backend Development, SQL
//       `;
//     } else if (command === 'ai') {
//       output = `
// AI Specialization:
//   • Deep Learning: Neural networks, CNN, RNN architectures
//   • NLP: Text processing, sentiment analysis, chatbot development
//   • Computer Vision: Image classification, object detection
//   • Data Science: Feature engineering, model optimization
//   • Tools: TensorFlow, Python AI ecosystem, cloud AI services
//       `;
//     } else if (command === 'projects') {
//       output = `
// Projects:
//   1. NLP Personalized Chatbot - Advanced learning assistant with content processing
//   2. Computer Vision Self-Driving Car - Autonomous driving for Trackmania
//   3. Frank de Bank - AI-powered talking bench with Raspberry Pi
//   4. AWS Sagemaker Implementation - Cloud-based ML pipelines

// Type "project <number>" for details.
//       `;
//     } else if (command.startsWith('project ')) {
//       const projectNum = parseInt(command.split(' ')[1]);
//       if (projectNum === 1) {
//         output = `
// NLP Personalized Chatbot:
// A sophisticated AI learning assistant that processes educational content from various 
// sources (PDFs, YouTube, web) and enables interactive Q&A. Features include voice interaction, 
// long-term memory, and specialized study tools like quiz generation.

// Technologies: Vector Databases, LLMs, Content Processing Agents, Voice Interaction
//         `;
//       } else if (projectNum === 2) {
//         output = `
// Computer Vision Self-Driving Car:
// Deep learning system for autonomous driving in the Trackmania racing game. The system 
// captures gameplay in real-time, analyzes visual data using CNNs, and makes driving 
// decisions to navigate tracks autonomously.

// Technologies: ResNet CNN, Image Processing, Real-time Control
//         `;
//       } else if (projectNum === 3) {
//         output = `
// Frank de Bank - The Bench Whisperers:
// Innovative AI-powered talking bench for public spaces that engages with citizens to 
// gather community feedback. Features conversational AI, voice recognition, and analytics 
// dashboard for city planners.

// Technologies: Google Gemini AI, Speech-to-Text, Raspberry Pi, FastAPI
//         `;
//       } else if (projectNum === 4) {
//         output = `
// AWS Sagemaker Implementation:
// Cloud-based machine learning pipelines using AWS Sagemaker, enabling scalable model 
// training, deployment and monitoring for production-grade AI applications.

// Technologies: AWS Sagemaker, Cloud Computing, MLOps
//         `;
//       } else {
//         output = 'Project not found. Type "projects" to see available projects.';
//       }
//     } else if (command === 'education') {
//       output = `
// Education:
//   • Thomas More University of Applied Sciences
//     Applied Computer Science - AI Specialization
//     September 2022 - Present
//     Geel, Belgium

//   • University of Victoria
//     Computer Science
//     September 2019 - May 2021 (Not finished)
//     Victoria, BC, Canada

// Certifications:
//   • Complete Math, Statistics & Probability for Machine Learning
//       `;
//     } else if (command === 'contact') {
//       output = `
// Contact Information:
//   • Email: egemenalkan90@gmail.com
//   • LinkedIn: linkedin.com/in/egemen-alkan
//   • Location: Geel Belgium
//       `;
//     } else if (command === 'languages') {
//       output = `
// Language Proficiency:
//   • English: Fluent
//   • Turkish: Fluent
//       `;
//     } else if (command === 'interests') {
//       output = `
// Personal Interests:
//   • Formula 1
//   • Football
//   • Video Games
//   • Basketball
//   • Hiking
//   • Biking
//       `;
//     } else if (command === 'clear') {
//       setHistory([]);
//       return;
//     } else if (command === 'exit') {
//       onClose();
//       return;
//     } else {
//       output = `Command not found: ${command}. Type "help" for available commands.`;
//     }
    
//     // Update the last history item with the output
//     const updatedHistory = [...currentHistory];
//     updatedHistory[updatedHistory.length - 1].output = output.trim();
//     setHistory(updatedHistory);
//   };

//   const handleKeyDown = (e) => {
//     // Command history navigation
//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       const commandHistory = history.filter(item => item.command).map(item => item.command);
      
//       if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
//         const newIndex = historyIndex + 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       }
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       const commandHistory = history.filter(item => item.command).map(item => item.command);
      
//       if (historyIndex > 0) {
//         const newIndex = historyIndex - 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       } else if (historyIndex === 0) {
//         setHistoryIndex(-1);
//         setInput('');
//       }
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="terminal-overlay">
//       <div className="terminal">
//         <div className="terminal-header">
//           <div className="terminal-controls">
//             <div className="terminal-control-dot red-dot"></div>
//             <div className="terminal-control-dot yellow-dot"></div>
//             <div className="terminal-control-dot green-dot"></div>
//           </div>
//           <div className="terminal-title">egemen@portfolio:~</div>
//           <button 
//             className="terminal-close-button"
//             onClick={onClose}
//           >
//             ✕
//           </button>
//         </div>
        
//         <div className="terminal-content" ref={contentRef}>
//           <div className="terminal-history">
//             {history.map((item, index) => (
//               <div key={index} className="terminal-history-item">
//                 {item.command && (
//                   <div className="terminal-command">
//                     <span className="terminal-prompt">egemen@portfolio:~$</span>
//                     {item.command}
//                   </div>
//                 )}
//                 {item.output && (
//                   <div className="terminal-output">{item.output}</div>
//                 )}
//               </div>
//             ))}
//           </div>
          
//           <form onSubmit={handleSubmit} className="terminal-input-form">
//             <span className="terminal-input-prompt">egemen@portfolio:~$</span>
//             <input 
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               ref={inputRef}
//               className="terminal-input-field"
//               autoFocus
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Terminal;






import { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      
      // Add welcome message
      setHistory([
        { 
          command: '', 
          output: 'Welcome to Egemen\'s terminal. Type "help" for available commands.' 
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add command to history
    const newHistory = [...history, { command: input, output: '' }];
    setHistory(newHistory);
    
    // Process command
    processCommand(input, newHistory);
    
    // Reset input and history navigation
    setInput('');
    setHistoryIndex(-1);
  };

  const processCommand = (cmd, currentHistory) => {
    const command = cmd.trim().toLowerCase();
    let output = '';
    
    // Command processing
    if (command === 'help') {
      output = `
Available commands:
  help - Show this help message
  about - Learn about me
  skills - List my skills
  projects - View my projects
  education - View my educational background
  contact - Get contact information
  languages - Show language proficiency
  interests - Show my personal interests
  clear - Clear terminal
  exit - Close terminal
      `;
    } else if (command === 'about') {
      output = `
Applied Computer Science student specializing in Artificial Intelligence.

I recently completed a transformative internship at Estée Lauder, focusing on "Transforming 
Production Planning Through Data Intelligence." I delivered two robust solutions: an automated 
violation tracker in Power BI and an AI Planning Assistant prototype.

I focus on leveraging AI technologies to solve complex problems, with expertise in 
machine learning, deep learning, and data science. My technical foundation combines 
AI expertise with strong software development skills.
      `;
    } else if (command === 'skills') {
      output = `
Skills:
  • AI & Data: Deep Learning, NLP, Computer Vision, Microsoft Copilot Studio, Prompt Engineering
  • Data Analysis: Power BI, DAX, Data Modelling, SQL, Qlik
  • Development: Python, Java, JavaScript, React, .NET, Power Apps
  • Cloud & Tools: AWS, Azure, Git, Docker
  • Math/CS: Statistics, Algorithms, Linear Algebra
      `;
    } else if (command === 'ai') {
      output = `
AI Specialization:
  • Enterprise AI: Multi-Agent Systems, RAG (Retrieval-Augmented Generation)
  • Deep Learning: Neural networks, CNN, RNN architectures
  • NLP: Text processing, sentiment analysis, chatbot development
  • Computer Vision: Image classification, object detection
  • Tools: PyTorch, TensorFlow, Copilot Studio, Python AI ecosystem
      `;
    } else if (command === 'projects') {
      output = `
Projects:
  1. Internship: Enhanced Weekly Planning Report (Estée Lauder)
  2. Internship: AI Planning Assistant (Estée Lauder)
  3. NLP Personalized Chatbot
  4. Computer Vision Self-Driving Car
  5. Frank de Bank - AI-powered talking bench
  6. Neural Networks from Scratch
  7. AI-Powered Particle Accelerator Simulation

Type "project <number>" for details.
      `;
    } else if (command.startsWith('project ')) {
      const projectNum = parseInt(command.split(' ')[1]);
      if (projectNum === 1) {
        output = `
Internship: Enhanced Weekly Planning Report (Primary Deliverable):
An automated violation tracker designed to transform weekly planning meetings from data verification 
to strategic decision-making. 

Features:
• Automates 10 complex planning rules using advanced DAX logic.
• Includes "Context-Aware Changeovers" and "Two-Step Duplicate Validation".
• Embedded Power App for "Agreed Violations" write-back capability.
• Dynamic rolling 6-week window filter.

Technologies: Power BI, DAX, Power Apps, SharePoint Lists
        `;
      } else if (projectNum === 2) {
        output = `
Internship: AI Planning Assistant (Secondary Deliverable):
A high-fidelity prototype of an enterprise AI Co-Pilot developed to assist planners with data 
queries and procedural guidance. Validated with a 100% benchmark success rate.

Features:
• Multi-Agent Routing System (Main Agent, Missing Parts Agent, Ready to Firm Agent).
• Dynamic DAX query generation from natural language.
• Live SharePoint RAG connection for procedural knowledge.
• Enterprise security compliance (Entra ID, in-tenant processing).

Technologies: Microsoft Copilot Studio, Power Automate, Prompt Engineering
        `;
      } else if (projectNum === 3) {
        output = `
NLP Personalized Chatbot:
A sophisticated AI learning assistant that processes educational content from various 
sources (PDFs, YouTube, web) and enables interactive Q&A. Features include voice interaction, 
long-term memory, and specialized study tools like quiz generation.

Technologies: Vector Databases, LLMs, Content Processing Agents, Voice Interaction
        `;
      } else if (projectNum === 4) {
        output = `
Computer Vision Self-Driving Car:
Deep learning system for autonomous driving in the Trackmania racing game. The system 
captures gameplay in real-time, analyzes visual data using CNNs, and makes driving 
decisions to navigate tracks autonomously.

Technologies: ResNet CNN, Image Processing, Real-time Control
        `;
      } else if (projectNum === 5) {
        output = `
Frank de Bank:
Innovative AI-powered talking bench for public spaces that engages with citizens to 
gather community feedback. Features conversational AI, voice recognition, and analytics 
dashboard for city planners.

Technologies: Google Gemini AI, Speech-to-Text, Raspberry Pi, FastAPI
        `;
      } else if (projectNum === 6) {
        output = `
Neural Networks from Scratch:
A dedicated research project mastering the mathematical foundations of deep learning by 
building a neural network library entirely from first principles. Implemented core components 
like forward/backward propagation, activation functions, and optimizers manually using only 
Python and NumPy to understand model convergence.

Technologies: Python, NumPy, Mathematics, Deep Learning, Backpropagation
        `;
      } else if (projectNum === 7) {
        output = `
AI-Powered Particle Accelerator Simulation:
A "Digital Physics Laboratory" simulating high-energy particle collisions (LHC-style) to 
detect "new physics." Uses industry-standard tools (PYTHIA8, ROOT) for simulation and a 
multi-stage AI pipeline for unsupervised anomaly detection and particle discovery. 
Features a full-stack architecture with 3D visualization.

Technologies: Python, PyTorch, PYTHIA8, ROOT (CERN), FastAPI, Three.js
        `;
      } else {
        output = 'Project not found. Type "projects" to see available projects.';
      }
    } else if (command === 'education') {
      output = `
Education:
  • Thomas More University of Applied Sciences
    Applied Computer Science - AI Specialization
    September 2022 - Present
    Geel, Belgium

  • University of Victoria
    Computer Science
    September 2019 - May 2021 (Not finished)
    Victoria, BC, Canada

Certifications:
  • Complete Math, Statistics & Probability for Machine Learning
      `;
    } else if (command === 'contact') {
      output = `
Contact Information:
  • Email: egemenalkan90@gmail.com
  • LinkedIn: linkedin.com/in/egemen-alkan
  • Location: Geel Belgium
      `;
    } else if (command === 'languages') {
      output = `
Language Proficiency:
  • English: Fluent
  • Turkish: Fluent
      `;
    } else if (command === 'interests') {
      output = `
Personal Interests:
  • Formula 1
  • Football
  • Video Games
  • Basketball
  • Hiking
  • Biking
      `;
    } else if (command === 'clear') {
      setHistory([]);
      return;
    } else if (command === 'exit') {
      onClose();
      return;
    } else {
      output = `Command not found: ${command}. Type "help" for available commands.`;
    }
    
    // Update the last history item with the output
    const updatedHistory = [...currentHistory];
    updatedHistory[updatedHistory.length - 1].output = output.trim();
    setHistory(updatedHistory);
  };

  const handleKeyDown = (e) => {
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commandHistory = history.filter(item => item.command).map(item => item.command);
      
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const commandHistory = history.filter(item => item.command).map(item => item.command);
      
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-controls">
            <div className="terminal-control-dot red-dot"></div>
            <div className="terminal-control-dot yellow-dot"></div>
            <div className="terminal-control-dot green-dot"></div>
          </div>
          <div className="terminal-title">egemen@portfolio:~</div>
          <button 
            className="terminal-close-button"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        <div className="terminal-content" ref={contentRef}>
          <div className="terminal-history">
            {history.map((item, index) => (
              <div key={index} className="terminal-history-item">
                {item.command && (
                  <div className="terminal-command">
                    <span className="terminal-prompt">egemen@portfolio:~$</span>
                    {item.command}
                  </div>
                )}
                {item.output && (
                  <div className="terminal-output">{item.output}</div>
                )}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="terminal-input-form">
            <span className="terminal-input-prompt">egemen@portfolio:~$</span>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              className="terminal-input-field"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;