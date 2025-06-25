import SkillBar from '../components/ui/SkillBar';
import './Skills.css';

const Skills = () => {
    // Skill categories with their skills data (removed percentages)
    const skillsData = {
    dataAi: [
        { name: 'Data Science' },
        { name: 'Data Engineering' },
        { name: 'Deep Learning' },
        { name: 'Data Analytics' },
        { name: 'Data Visualization' },
        { name: 'Cloud AI' },
        { name: 'Artificial Intelligence (AI)' },
        { name: 'Natural Language Processing' },
        { name: 'Computer Vision' },
        { name: 'Machine Learning' },
        { name: 'Big Data' },
        { name: 'Neural Networks' },
        { name: 'TensorFlow' },
        { name: 'Keras' },
        { name: 'PyTorch' },
        { name: 'AWS' }
        ],
      development: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'JavaScript & React' },
        { name: 'React' },
        { name: 'PHP' },
        { name: '.NET Framework' },
        { name: 'HTML/CSS' },
        { name: 'C#' },
        { name: 'SQL' },
        { name: 'Web Development' },
        { name: 'Front-End Development' },
        { name: 'Back-End Development' },
        { name: 'ASP.NET' },
        { name: 'Livewire' },
        { name: 'Tailwind CSS' },
        { name: 'Laravel' },
        { name: 'Object-Oriented Programming' },
        { name: 'SASS' },
        { name: 'HTML5' },
        { name: 'CSS' },
        { name: 'HTML' },
        { name: 'Spring Framework' },
        { name: 'C' }
      ],
      infrastructure: [
        { name: 'Linux Administration' },
        { name: 'DevOps' },
        { name: 'Cybersecurity' },
        { name: 'Computer Networking' },
        { name: 'Windows Administration' },
        { name: 'IoT' },
        { name: 'Internet of Things (IoT)' },
        { name: 'Ubuntu' },
        { name: 'Computer Architecture' },
        { name: 'Data Structures' },
        { name: 'Algorithms' }
      ],
      project: [
        { name: 'Requirements Analysis' },
        { name: 'ITIL' },
        { name: 'UML' },
        { name: 'Business Process Management' },
        { name: 'Project Documentation' },
        { name: 'Business Process' },
        { name: 'Business Intelligence (BI)' },
        { name: 'Qlik Sense' },
        { name: 'ORM' },
        { name: 'Entrepreneurship' },
        { name: 'Microsoft 365' },
        { name: 'Microsoft Power BI' },
        { name: 'Microsoft Power Automate' },
        { name: 'Academic Writing' }
      ],
      math: [
        { name: 'Statistics' },
        { name: 'Discrete Mathematics' },
        { name: 'Linear Algebra' },
        { name: 'Calculus' }
      ],
      other: [
        { name: 'Customer Service' },
        { name: 'Computer Science' }
      ]
    };
  
    return (
      <div className="skills-page">
        <div className="container">
          <h1 className="page-title">Skills & Expertise</h1>

          <div className="skills-grid">
            <div className="skills-category">
              <h2 className="category-title">AI & Data</h2>
              <div className="skills-list">
                {skillsData.dataAi.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
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