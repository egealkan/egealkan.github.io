import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      university: 'Thomas More University',
      degree: 'Bachelor • Applied Computer Science',
      period: '2022 - Present',
      location: 'Geel, Belgium',
      skills: {
        'AI and data': ['Artificial Intelligence (AI)', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Machine Learning', 'Data Science', 'Big Data', 'Neural Networks', 'TensorFlow', 'Keras', 'PyTorch', 'Data Visualization', 'Data Engineering', 'AWS', 'Microsoft Copilot Studio'],
        development: ['ASP.NET', 'React', 'Web Development', 'Front-End Development', 'SQL', 'PHP', 'C#', 'Python', 'Livewire', 'Tailwind CSS', 'Object-Oriented Programming', 'Laravel', 'JavaScript', 'SASS', 'HTML5', 'Back-End Development', 'CSS', 'HTML', 'Internet of Things (IoT)', 'Ubuntu', 'Java', 'Spring Framework'],
        business: ['Business Process', 'Business Intelligence (BI)', 'Qlik Sense', 'UML', 'ORM', 'Entrepreneurship', 'Microsoft 365', 'Microsoft Power BI', 'Microsoft Power Automate', 'Microsoft PowerApps', 'PnP']
      }
    },
    {
      university: 'University of Victoria',
      degree: 'Computer Science',
      period: '2019 - 2022 (Not Completed)',
      location: 'Victoria, Canada',
      skills: {
        fundamentals: ['C', 'Python', 'Java', 'Computer Architecture', 'Academic Writing', 'Algorithms', 'Data Structures'],
        math: ['Discrete Mathematics', 'Calculus', 'Statistics', 'Linear Algebra'],
        other: ['Customer Service', 'Computer Science']
      }
    },
    {
        university: 'Victoria High School',
        degree: 'High School Diploma',
        period: '2016 - 2019',
        location: 'Victoria, Canada',
        skills: {
            'High School': ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Social Studies', 'Computer Science', 'Work Experience', 'History', 'Career Life Education']
        }
      }
  ];

  return (
    <div className="skills-page">
      <div className="container">
        <h1 className="page-title">Skills</h1>
        
        <div className="skills-timeline">
          {skillsData.map((skills, index) => (
            <div key={index} className="skills-card">
              <div className="university-section">
                <div className="university-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 11.5V16.5C6 17.6046 8.6863 18.5 12 18.5C15.3137 18.5 18 17.6046 18 16.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="university-info">
                  <h2 className="university-name">{skills.university}</h2>
                  <div className="university-details">
                    <p className="degree-info">{skills.degree}</p>
                    <div className="period-location">
                      <span className="period">{skills.period}</span>
                      <span className="location">{skills.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skills-section">
                {Object.entries(skills.skills).map(([category, skillList]) => (
                  <div key={category} className="skill-category">
                    <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="skill-tags">
                      {skillList.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;