import './Internship.css';

const Internship = () => {
  const internshipData = {
    title: "Applied Computer Science Internship",
    company: "[Company Name]",
    period: "[Start Date] - [End Date]",
    location: "[City, Country]",
    supervisor: "[Supervisor Name]",
    summary: `
      [Add your internship summary here - describe the main responsibilities, 
      technologies used, and key contributions during your internship. 
      This should be aimed at IT professionals and highlight your technical growth.]
    `,
    keyResponsibilities: [
      "[Responsibility 1 - e.g., Developed web applications using React and Node.js]",
      "[Responsibility 2 - e.g., Implemented database solutions with SQL Server]",
      "[Responsibility 3 - e.g., Collaborated with development team on agile projects]",
      "[Responsibility 4 - e.g., Participated in code reviews and testing procedures]"
    ],
    technologiesUsed: [
      "[Technology 1]",
      "[Technology 2]", 
      "[Technology 3]",
      "[Technology 4]"
    ],
    achievements: [
      "[Achievement 1 - quantify if possible]",
      "[Achievement 2 - focus on impact]",
      "[Achievement 3 - highlight learning outcomes]"
    ],
    documents: [
      {
        name: "Internship Certificate",
        description: "Official completion certificate verified by supervisor",
        available: true
      },
      {
        name: "Project Documentation", 
        description: "Technical documentation of main project deliverables",
        available: true
      },
      {
        name: "Performance Evaluation",
        description: "Supervisor assessment and feedback report", 
        available: true
      }
    ]
  };

  return (
    <div className="internship-page">
      <div className="container">
        <h1 className="page-title">Internship Experience</h1>
        
        <div className="internship-container">
          <div className="internship-header">
            <div className="internship-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="internship-info">
              <h2 className="internship-title">{internshipData.title}</h2>
              <div className="company-info">
                <h3 className="company-name">{internshipData.company}</h3>
                <div className="period-location">
                  <span className="period">{internshipData.period}</span>
                  <span className="location">{internshipData.location}</span>
                </div>
                <div className="supervisor">
                  <strong>Supervisor:</strong> {internshipData.supervisor}
                </div>
              </div>
            </div>
          </div>
          
          <div className="internship-content">
            <section className="summary-section">
              <h3 className="section-title">Summary</h3>
              <p className="summary-text">{internshipData.summary}</p>
            </section>
            
            <div className="content-grid">
              <section className="responsibilities-section">
                <h3 className="section-title">Key Responsibilities</h3>
                <ul className="responsibility-list">
                  {internshipData.keyResponsibilities.map((responsibility, index) => (
                    <li key={index} className="responsibility-item">{responsibility}</li>
                  ))}
                </ul>
              </section>
              
              <section className="technologies-section">
                <h3 className="section-title">Technologies Used</h3>
                <div className="tech-tags">
                  {internshipData.technologiesUsed.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </section>
            </div>
            
            <section className="internship-achievements-section">
              <h3 className="section-title">Key Achievements</h3>
              <div className="internship-achievements-grid">
                {internshipData.achievements.map((achievement, index) => (
                  <div key={index} className="internship-achievement-card">
                    <div className="internship-achievement-number">{index + 1}</div>
                    <p className="internship-achievement-text">{achievement}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="documents-section">
              <h3 className="section-title">Supporting Documents</h3>
              <p className="documents-note">
                The following documents have been verified by my internship supervisor:
              </p>
              <div className="documents-list">
                {internshipData.documents.map((doc, index) => (
                  <div key={index} className="document-item">
                    <div className="document-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="document-info">
                      <h4 className="document-name">{doc.name}</h4>
                      <p className="document-description">{doc.description}</p>
                    </div>
                    <div className="document-status">
                      {doc.available ? (
                        <span className="status-available">✓ Available</span>
                      ) : (
                        <span className="status-pending">⏳ Pending</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;