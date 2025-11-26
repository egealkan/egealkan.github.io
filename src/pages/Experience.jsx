// import ProjectCard from '../components/ui/ProjectCard';
// import './Experience.css';

// const Experience = () => {
//   const projects = [
//     {
//       title: 'Deep Learning NLP Challenge',
//       description: 'Developed an AI-powered learning assistant that transforms educational content into interactive study tools. The system ingests various content formats (PDFs, YouTube videos, web resources) and enables users to interact through natural language conversations.',
//       tags: ['Vector Database (Qdrant)', 'Content Agents', 'Voice Interaction (Whisper & TTS)', 'Long-term Memory', 'Interactive Study Tools'],
//       steps: [
//         {
//           title: 'Content Processing Pipeline',
//           description: 'Built specialized agents to process multiple content types including PDFs, YouTube transcripts, and web content, converting them into searchable vector embeddings.'
//         },
//         {
//           title: 'Voice-Enabled Interface',
//           description: 'Integrated OpenAI\'s Whisper for speech recognition and Google\'s TTS for natural-sounding responses, enabling conversational learning experiences.'
//         },
//         {
//           title: 'Persistent Memory System',
//           description: 'Developed a robust database-backed memory system that maintains conversation context across multiple sessions for personalized interactions.'
//         },
//         {
//           title: 'Advanced Study Tools',
//           description: 'Created cheat sheet generators and interactive quiz systems with detailed feedback mechanisms to enhance the learning experience.'
//         }
//       ]
//     },
//     {
//       title: 'Frank de Bank - BenchMark',
//       description: 'Developed an innovative AI-powered talking bench for Rurant that engages with citizens to gather feedback about public spaces. This interactive installation uses conversational AI to create meaningful interactions while collecting valuable community insights.',
//       tags: ['Google Gemini AI', 'Speech-to-Text/Text-to-Speech', 'Emotion Analysis', 'RESTful API (FastAPI)', 'Analytics Dashboard'],
//       steps: [
//         {
//           title: 'Conversational AI Integration',
//           description: 'Implemented Google\'s Gemini AI to power natural, contextual conversations with bench users, creating an approachable interface for community feedback.'
//         },
//         {
//           title: 'Multi-modal Interaction',
//           description: 'Built a comprehensive speech processing system that handles voice input in noisy environments and generates natural-sounding responses.'
//         },
//         {
//           title: 'User Sentiment Analysis',
//           description: 'Developed emotion detection capabilities to analyze user sentiment during conversations, allowing the bench to respond appropriately to emotional cues.'
//         },
//         {
//           title: 'Data Analytics System',
//           description: 'Created a robust backend that tracks conversation topics, user engagement metrics, and feedback trends to provide actionable insights for city planners.'
//         }
//       ]
//     },
//     {
//       title: 'Computer Vision Challenge: Autonomous Driving',
//       description: 'Developed a deep learning system that enables autonomous driving in the Trackmania racing game using computer vision techniques. The system captures gameplay in real-time, analyzes visual data, and makes driving decisions to navigate the track.',
//       tags: ['ResNet CNN Architecture', 'Real-time Control', 'Data Augmentation', 'Advanced Training Techniques', 'YOLO Object Detection'],
//       steps: [
//         {
//           title: 'Data Capture & Preprocessing',
//           description: 'Created a robust pipeline for capturing, preprocessing, and augmenting game frames to train the model on various driving scenarios and conditions.'
//         },
//         {
//           title: 'Model Architecture Exploration',
//           description: 'Implemented and compared multiple ResNet models (18, 34, 50) for optimal image classification performance in dynamic racing environments.'
//         },
//         {
//           title: 'Performance Optimization',
//           description: 'Applied advanced training techniques including learning rate scheduling, dropout regularization, and mixed precision training to improve model accuracy.'
//         },
//         {
//           title: 'Real-time Control System',
//           description: 'Built a system that translates model predictions into game controls with minimal latency, allowing for real-time autonomous driving.'
//         }
//       ]
//     }
//   ];

//   return (
//     <div className="experience-page">
//       <div className="container">
//         <h1 className="page-title">Project Showcases</h1>
//         <p className="page-subtitle">Explore my featured projects through interactive roadmaps and descriptions</p>
        
//         <div className="projects-container">
//           {projects.map((project, index) => (
//             <div key={index} className="project-wrapper">
//               <ProjectCard project={project} />
              
//               {/* Video showcase for each project */}
//               <div className="video-showcase">
//                 <div className="video-container">
//                   <div className="video-placeholder">
//                     <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
//                       <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
//                     </svg>
//                     <span>Watch {project.title} demo</span>
//                   </div>
//                 </div>
//               </div>
//               <br />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;





import { BsGithub, BsPlayCircle, BsLink45Deg, BsCodeSlash } from "react-icons/bs";
import './Experience.css';

const Experience = () => {
  const projects = [
    {
      title: 'Deep Learning NLP Challenge',
      category: 'Artificial Intelligence & NLP',
      summary: 'Developed an AI-powered learning assistant that transforms educational content into interactive study tools. The system ingests various content formats (PDFs, YouTube videos, web resources) and enables users to interact through natural language conversations, effectively acting as a personalized tutor.',
      keyFeatures: [
        'Built specialized agents to process PDFs, YouTube transcripts, and web content into vector embeddings.',
        'Integrated OpenAI Whisper for speech recognition and Google TTS for natural voice interaction.',
        'Engineered a persistent memory system using vector databases to maintain conversation context.',
        'Implemented automated quiz generation and "cheat sheet" creation algorithms.'
      ],
      technologies: ['Python', 'Qdrant (Vector DB)', 'OpenAI Whisper', 'LangChain', 'React', 'FastAPI'],
      links: {
        github: "https://github.com/yourusername/project",
        demo: null, // Set to URL if available
        video: true // Set to true to show video placeholder
      }
    },
    {
      title: 'Frank de Bank - BenchMark',
      category: 'IoT & Conversational AI',
      summary: 'An innovative AI-powered "talking bench" installation for Rurant that engages citizens to gather feedback about public spaces. This project combined physical hardware with advanced conversational AI to create meaningful, emotion-aware interactions with the community.',
      keyFeatures: [
        'Integrated Google Gemini AI to power natural, open-ended conversations with bench users.',
        'Developed a robust speech processing pipeline capable of handling noisy outdoor environments.',
        'Implemented real-time sentiment analysis to detect user emotion and adapt the AI persona accordingly.',
        'Created an analytics dashboard for city planners to visualize community feedback trends.'
      ],
      technologies: ['Google Gemini', 'Python', 'Raspberry Pi', 'FastAPI', 'Sentiment Analysis', 'React'],
      links: {
        github: "https://github.com/yourusername/project",
        demo: "https://demo-link.com",
        video: true
      }
    },
    {
      title: 'Autonomous Driving CV Challenge',
      category: 'Computer Vision & Deep Learning',
      summary: 'Developed a deep learning system that enables autonomous driving in the Trackmania racing game. The model uses computer vision to analyze gameplay frames in real-time and predict steering and throttle controls to navigate complex tracks without human intervention.',
      keyFeatures: [
        'Created a low-latency pipeline for capturing and preprocessing game frames in real-time.',
        'Trained and compared multiple ResNet architectures (18, 34, 50) for optimal steering prediction.',
        'Applied data augmentation and mixed precision training to improve model generalization.',
        'Implemented a control system mapping neural network outputs to virtual game controller inputs.'
      ],
      technologies: ['PyTorch', 'OpenCV', 'ResNet CNN', 'YOLO', 'Data Augmentation', 'Python'],
      links: {
        github: "https://github.com/yourusername/project",
        video: true
      }
    },
    // --- NEW PROJECT PLACEHOLDERS ---
    {
      title: 'Enterprise Inventory Management System',
      category: 'Full Stack Development',
      summary: 'Designed a scalable inventory tracking application for a logistics client. The system replaced manual spreadsheet tracking with a centralized cloud database, featuring real-time stock alerts, barcode scanning integration, and automated reporting capabilities.',
      keyFeatures: [
        'Designed a RESTful API architecture handling over 10,000 daily transactions.',
        'Implemented role-based authentication and secure data access protocols.',
        'Built a responsive React frontend with interactive data visualization charts.',
        'Automated daily PDF report generation and email distribution to stakeholders.'
      ],
      technologies: ['Node.js', 'React', 'PostgreSQL', 'Docker', 'JWT Auth', 'Redis'],
      links: {
        github: "https://github.com/yourusername/project",
        demo: "#"
      }
    },
    {
      title: 'Smart Home Energy Monitor',
      category: 'IoT & Data Visualization',
      summary: 'A hardware-software solution for monitoring household energy consumption. IoT sensors collect real-time usage data, which is processed and visualized on a user-friendly dashboard to help users identify high-consumption appliances and reduce costs.',
      keyFeatures: [
        'Programmed ESP32 microcontrollers to read current sensors and transmit data via MQTT.',
        'Built a time-series database infrastructure to store historical consumption data.',
        'Developed a mobile-first web application for real-time monitoring and alerts.',
        'Implemented machine learning algorithms to predict future energy bills.'
      ],
      technologies: ['C++', 'MQTT', 'InfluxDB', 'Grafana', 'React Native', 'Python'],
      links: {
        github: "https://github.com/yourusername/project"
      }
    },
    {
      title: 'Portfolio Website V1',
      category: 'Web Development',
      summary: 'The first iteration of my personal portfolio website. This project focused on mastering modern CSS techniques, responsive design principles, and performance optimization without relying on heavy frameworks.',
      keyFeatures: [
        'Implemented a custom responsive grid system using CSS Grid and Flexbox.',
        'Achieved a perfect 100/100 Lighthouse performance score through asset optimization.',
        'Created custom CSS animations for interactive elements.',
        'Deployed via CI/CD pipeline to GitHub Pages.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Actions', 'Figma'],
      links: {
        github: "https://github.com/yourusername/project",
        demo: "#"
      }
    },
    {
      title: 'Social Media Sentiment Tracker',
      category: 'Data Science',
      summary: 'An analytical tool that scrapes public social media posts to analyze brand sentiment during product launches. The tool provides marketing teams with real-time feedback on public perception and emerging trends.',
      keyFeatures: [
        'Built a robust web scraper compliant with platform rate limits.',
        'Utilized NLP libraries (NLTK/Spacy) to tokenize and classify text sentiment.',
        'Created a Streamlit dashboard for interactive data exploration.',
        'Implemented topic modeling to identify trending discussion themes.'
      ],
      technologies: ['Python', 'Selenium', 'NLTK', 'Streamlit', 'Pandas', 'Scikit-learn'],
      links: {
        github: "https://github.com/yourusername/project"
      }
    }
  ];

  return (
    <div className="experience-page">
      <div className="container">
        <h1 className="page-title">Project Showcases</h1>
        <p className="page-subtitle">
          A collection of my technical projects, ranging from AI & Machine Learning to Full Stack Web Development.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <BsCodeSlash />
                </div>
                <div className="project-title-wrapper">
                  <span className="project-category">{project.category}</span>
                  <h2 className="project-title">{project.title}</h2>
                </div>
              </div>

              <div className="project-content">
                <p className="project-summary">{project.summary}</p>
                
                <div className="project-details-grid">
                  <div className="features-section">
                    <h3 className="section-heading">Key Features</h3>
                    <ul className="feature-list">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="feature-item">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="tech-section">
                    <h3 className="section-heading">Technologies</h3>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Media & Links Section */}
                <div className="project-footer">
                  <div className="project-links">
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                        <BsGithub /> Source Code
                      </a>
                    )}
                    {project.links?.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-btn demo">
                        <BsLink45Deg /> Live Demo
                      </a>
                    )}
                  </div>

                  {project.links?.video && (
                    <div className="video-preview">
                      <div className="video-placeholder">
                        <BsPlayCircle className="play-icon" />
                        <span>Watch Demo</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;