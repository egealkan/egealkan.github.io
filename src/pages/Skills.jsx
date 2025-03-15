import { Link } from 'react-router-dom';
import SkillBar from '../components/ui/SkillBar';
import './Skills.css';

const Skills = () => {
    // Skill categories with their skills data
    const skillsData = {
    dataAi: [
        { name: 'Data Science', percentage: 85 },
        { name: 'Data Engineering', percentage: 80 },
        { name: 'Deep Learning', percentage: 85 },
        { name: 'Data Analytics', percentage: 90 },
        { name: 'Data Visualization', percentage: 85 },
        { name: 'Cloud AI', percentage: 70 },
        { name: 'Artificial Intelligence (AI)', percentage: 85 },
        { name: 'Natural Language Processing', percentage: 80 },
        { name: 'Computer Vision', percentage: 75 },
        { name: 'Machine Learning', percentage: 82 },
        { name: 'Big Data', percentage: 75 },
        { name: 'Neural Networks', percentage: 70 },
        { name: 'TensorFlow', percentage: 70 },
        { name: 'Keras', percentage: 65 },
        { name: 'PyTorch', percentage: 80 },
        { name: 'AWS', percentage: 70 }
        ],
      development: [
        { name: 'Python', percentage: 95 },
        { name: 'Java', percentage: 90 },
        { name: 'JavaScript & React', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'PHP', percentage: 80 },
        { name: '.NET Framework', percentage: 75 },
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'C#', percentage: 85 },
        { name: 'SQL', percentage: 88 },
        { name: 'Web Development', percentage: 85 },
        { name: 'Front-End Development', percentage: 85 },
        { name: 'Back-End Development', percentage: 85 },
        { name: 'ASP.NET', percentage: 80 },
        { name: 'Livewire', percentage: 75 },
        { name: 'Tailwind CSS', percentage: 85 },
        { name: 'Laravel', percentage: 80 },
        { name: 'Object-Oriented Programming', percentage: 90 },
        { name: 'SASS', percentage: 80 },
        { name: 'HTML5', percentage: 88 },
        { name: 'CSS', percentage: 88 },
        { name: 'HTML', percentage: 90 },
        { name: 'Spring Framework', percentage: 75 },
        { name: 'C', percentage: 75 }
      ],
      infrastructure: [
        { name: 'Linux Administration', percentage: 80 },
        { name: 'DevOps', percentage: 75 },
        { name: 'Cybersecurity', percentage: 70 },
        { name: 'Computer Networking', percentage: 75 },
        { name: 'Windows Administration', percentage: 85 },
        { name: 'IoT', percentage: 65 },
        { name: 'Internet of Things (IoT)', percentage: 65 },
        { name: 'Ubuntu', percentage: 80 },
        { name: 'Computer Architecture', percentage: 75 },
        { name: 'Data Structures', percentage: 85 },
        { name: 'Algorithms', percentage: 80 }
      ],
      project: [
        { name: 'Requirements Analysis', percentage: 90 },
        { name: 'ITIL', percentage: 85 },
        { name: 'UML', percentage: 80 },
        { name: 'Business Process Management', percentage: 85 },
        { name: 'Project Documentation', percentage: 90 },
        { name: 'Business Process', percentage: 85 },
        { name: 'Business Intelligence (BI)', percentage: 80 },
        { name: 'Qlik Sense', percentage: 75 },
        { name: 'ORM', percentage: 75 },
        { name: 'Entrepreneurship', percentage: 80 },
        { name: 'Microsoft 365', percentage: 85 },
        { name: 'Microsoft Power BI', percentage: 80 },
        { name: 'Microsoft Power Automate', percentage: 75 },
        { name: 'Academic Writing', percentage: 85 }
      ],
      math: [
        { name: 'Statistics', percentage: 80 },
        { name: 'Discrete Mathematics', percentage: 75 },
        { name: 'Linear Algebra', percentage: 75 },
        { name: 'Calculus', percentage: 70 }
      ],
      other: [
        { name: 'Customer Service', percentage: 85 },
        { name: 'Computer Science', percentage: 90 }
      ]
    };
  
    return (
      <div className="skills-page">
        <div className="container">
          <h1 className="page-title">Skills & Expertise</h1>
          
          {/* <div className="skills-nav">
            <a href="./languages" className="skills-nav-link">
              Go to Language Skills
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div> */}


          <div className="skills-grid">
          <div className="skills-category">
              <h2 className="category-title">AI & Data</h2>
              <div className="skills-list">
                {skillsData.dataAi.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color="#4a9dff"
                  />
                ))}
              </div>
            </div>
          
          
            <div className="skills-category">
              <h2 className="category-title">Development</h2>
              <div className="skills-list">
                {skillsData.development.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
            </div>
            
            <div className="skills-category">
              <h2 className="category-title">Infrastructure</h2>
              <div className="skills-list">
                {skillsData.infrastructure.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color="#9d65ff"
                  />
                ))}
              </div>
            </div>
            
            <div className="skills-category">
              <h2 className="category-title">Project Management & Business</h2>
              <div className="skills-list">
                {skillsData.project.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color="#ff6565"
                  />
                ))}
              </div>
            </div>
  
            <div className="skills-category">
              <h2 className="category-title">Mathematics</h2>
              <div className="skills-list">
                {skillsData.math.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color="#ffbb3c"
                  />
                ))}
              </div>
            </div>
            
            <div className="skills-category">
              <h2 className="category-title">Other Skills</h2>
              <div className="skills-list">
                {skillsData.other.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color="#3cdfff"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Skills;