import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      university: 'Thomas More University',
      degree: 'Bachelor • Applied Computer Science',
      period: '2022 - Present',
      location: 'Geel, Belgium',
      academicYears: [
        {
          year: '2024-2025',
          courses: [
            '.NET Development',
            'Data Visualisation',
            'Professional Skills 3',
            'Project 4.0',
            'Project PHP',
            'Religion, Meaning and Culture',
            'Business Intelligence Project',
            'Cloud AI',
            'Data Engineering',
            'Deep Learning',
            'Enterprise Content Services'
          ]
        },
        {
          year: '2023-2024',
          courses: [
            'Java Advanced (EN)',
            'Linux Webservices (EN)',
            'Web Applications in PHP (EN)',
            'Artificial Intelligence (EN)',
            'Business Processes & ITIL (EN)',
            'Entrepreneurship (EN)',
            'Professional Skills 2 (EN)',
            'Security Essentials (EN)',
            'UML (EN)',
            'Data Science (EN)',
            'DevOps & Security (EN)',
            'Intercultural Communication (EN)',
            'Operating Systems (EN)',
            'Requirements Analysis (EN)'
          ]
        },
        {
          year: '2022-2023',
          courses: [
            'Application Development in Python (EN)',
            'IT Essentials (EN)',
            'IoT Essentials (EN)',
            'Network Essentials (EN)',
            'Webdesign Essentials (EN)',
            'Application Development in Java (EN)',
            'Communication Skills 1 (EN)',
            'Data Analysis with SQL (EN)',
            'Professional Skills 1 (EN)',
            'Switching, Routing and Wireless Essentials (EN)',
            'Webdesign Advanced (EN)',
            'Windows System Administration (EN)'
          ]
        }
      ]
    },
  ];

  return (
    <div className="education-page">
      <div className="container">
        <h1 className="page-title">Education & ECTS Courses</h1>
        
        <div className="education-timeline">
          {educationData.map((education, index) => (
            <div key={index} className="education-card">
              <div className="university-section">
                <div className="university-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 11.5V16.5C6 17.6046 8.6863 18.5 12 18.5C15.3137 18.5 18 17.6046 18 16.5V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="university-info">
                  <h2 className="university-name">{education.university}</h2>
                  <div className="university-details">
                    <p className="degree-info">{education.degree}</p>
                    <div className="period-location">
                      <span className="period">{education.period}</span>
                      <span className="location">{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="courses-section">
                {education.academicYears.map((yearData, yearIndex) => (
                  <div key={yearIndex} className="academic-year">
                    <h3 className="year-title">{yearData.year}</h3>
                    <div className="courses-grid">
                      {yearData.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="course-item">
                          <span className="course-name">{course}</span>
                        </div>
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

export default Education;