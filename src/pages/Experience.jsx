import ProjectCard from '../components/ui/ProjectCard';
import './Experience.css';

const Experience = () => {
  const projects = [
    {
      title: 'Deep Learning NLP Challenge',
      description: 'Developed an AI-powered learning assistant that transforms educational content into interactive study tools. The system ingests various content formats (PDFs, YouTube videos, web resources) and enables users to interact through natural language conversations.',
      tags: ['Vector Database (Qdrant)', 'Content Agents', 'Voice Interaction (Whisper & TTS)', 'Long-term Memory', 'Interactive Study Tools'],
      steps: [
        {
          title: 'Content Processing Pipeline',
          description: 'Built specialized agents to process multiple content types including PDFs, YouTube transcripts, and web content, converting them into searchable vector embeddings.'
        },
        {
          title: 'Voice-Enabled Interface',
          description: 'Integrated OpenAI\'s Whisper for speech recognition and Google\'s TTS for natural-sounding responses, enabling conversational learning experiences.'
        },
        {
          title: 'Persistent Memory System',
          description: 'Developed a robust database-backed memory system that maintains conversation context across multiple sessions for personalized interactions.'
        },
        {
          title: 'Advanced Study Tools',
          description: 'Created cheat sheet generators and interactive quiz systems with detailed feedback mechanisms to enhance the learning experience.'
        }
      ]
    },
    {
      title: 'Frank de Bank - BenchMark',
      description: 'Developed an innovative AI-powered talking bench for Rurant that engages with citizens to gather feedback about public spaces. This interactive installation uses conversational AI to create meaningful interactions while collecting valuable community insights.',
      tags: ['Google Gemini AI', 'Speech-to-Text/Text-to-Speech', 'Emotion Analysis', 'RESTful API (FastAPI)', 'Analytics Dashboard'],
      steps: [
        {
          title: 'Conversational AI Integration',
          description: 'Implemented Google\'s Gemini AI to power natural, contextual conversations with bench users, creating an approachable interface for community feedback.'
        },
        {
          title: 'Multi-modal Interaction',
          description: 'Built a comprehensive speech processing system that handles voice input in noisy environments and generates natural-sounding responses.'
        },
        {
          title: 'User Sentiment Analysis',
          description: 'Developed emotion detection capabilities to analyze user sentiment during conversations, allowing the bench to respond appropriately to emotional cues.'
        },
        {
          title: 'Data Analytics System',
          description: 'Created a robust backend that tracks conversation topics, user engagement metrics, and feedback trends to provide actionable insights for city planners.'
        }
      ]
    },
    {
      title: 'Computer Vision Challenge: Autonomous Driving',
      description: 'Developed a deep learning system that enables autonomous driving in the Trackmania racing game using computer vision techniques. The system captures gameplay in real-time, analyzes visual data, and makes driving decisions to navigate the track.',
      tags: ['ResNet CNN Architecture', 'Real-time Control', 'Data Augmentation', 'Advanced Training Techniques', 'YOLO Object Detection'],
      steps: [
        {
          title: 'Data Capture & Preprocessing',
          description: 'Created a robust pipeline for capturing, preprocessing, and augmenting game frames to train the model on various driving scenarios and conditions.'
        },
        {
          title: 'Model Architecture Exploration',
          description: 'Implemented and compared multiple ResNet models (18, 34, 50) for optimal image classification performance in dynamic racing environments.'
        },
        {
          title: 'Performance Optimization',
          description: 'Applied advanced training techniques including learning rate scheduling, dropout regularization, and mixed precision training to improve model accuracy.'
        },
        {
          title: 'Real-time Control System',
          description: 'Built a system that translates model predictions into game controls with minimal latency, allowing for real-time autonomous driving.'
        }
      ]
    }
  ];

  return (
    <div className="experience-page">
      <div className="container">
        <h1 className="page-title">Project Showcases</h1>
        <p className="page-subtitle">Explore my featured projects through interactive roadmaps and descriptions</p>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-wrapper">
              <ProjectCard project={project} />
              
              {/* Video showcase for each project */}
              <div className="video-showcase">
                <div className="video-container">
                  <div className="video-placeholder">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                    </svg>
                    <span>Watch {project.title} demo</span>
                  </div>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;