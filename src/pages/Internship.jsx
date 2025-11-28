// https://www.npmjs.com/package/react-icons
// https://react-icons.github.io/react-icons/
// https://fontawesome.com/

import { useState } from 'react';
import { BsCloudDownload } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { BsDatabaseFillAdd } from "react-icons/bs";
import './Internship.css';

const Internship = () => {
  const [activeDocIndex, setActiveDocIndex] = useState(null);
  
  const internshipData = {
    title: "Transforming Production Planning Through Data Intelligence",
    company: "Estée Lauder Companies",
    period: "September 2025 - December 2025", // Adjusted based on typical fall semester, edit if needed
    location: "Oevel, Belgium",
    mentor: "Wietse Beterams",
    summary: `
      Designed and delivered a dual-workstream project to address critical operational bottlenecks in weekly planning meetings. The initiative transformed a historically reactive, manual data validation process into an automated, strategic decision-making workflow.
      
      The primary deliverable was an Enhanced Weekly Planning Report in Power BI that serves as an automated "Violation Tracker" for 10 complex planning rules. The secondary deliverable was a high-fidelity AI Planning Assistant prototype (built in Microsoft Copilot Studio) that enables natural language queries of live production data and procedural documentation, achieving a 100% success rate in technical benchmarking.
    `,
    keyResponsibilities: [
      "Engineered an automated Power BI 'Violation Tracker' using advanced DAX logic to monitor 10 standard planning rules (e.g., Context-Aware Changeovers, Two-Step Duplicate Checks).",
      "Conducted a comprehensive technical feasibility study comparing Microsoft Copilot Studio, OpenAI, and Custom Python solutions against enterprise security requirements (Entra ID, In-Tenant Data Governance).",
      "Architected a Multi-Agent AI prototype in Copilot Studio that routes user intents between live Power BI data queries and SharePoint procedural documents.",
      "Developed and embedded a custom Power App to enable a 'Write-Back' workflow, allowing planners to log 'Agreed Violations' directly to a SharePoint backend.",
      "Solved complex Data Model Ambiguity challenges by implementing virtual tables (ADDCOLUMNS, RANKX) to handle non-linear production sequences."
    ],
    technologiesUsed: [
      "Power BI",
      "Advanced DAX", 
      "Microsoft Copilot Studio",
      "Power Apps",
      "Microsoft Entra ID",
      "SharePoint Integration",
      "Power Automate",
      "Open AI Agent Builder"
    ],
    achievements: [
      "Transformed weekly meetings from 30-minute manual data verification sessions into proactive strategic decision-making forums.",
      "Achieved 100% success rate in AI prototype benchmarking across 5 KPIs, including Security Compliance, Query Accuracy, and Live Data Capability.",
      "Created a 'Single Source of Truth' that eliminates hours of manual pre-meeting data compilation for the planning team."
    ],
    documents: [
      {
        name: "Project Plan",
        description: "Strategic roadmap outlining business case, deliverables, and timeline.",
        available: true,
        fileUrl: "/documents/Project Plan.pdf" 
      },
      {
        name: "Summary Document", 
        description: "Executive overview of the automated reporting tools and AI architecture.",
        available: true,
        fileUrl: "/documents/Summary Document.pdf"
      },
      {
        name: "Internship Realisation",
        description: "Comprehensive 87-page technical report detailing DAX logic and AI implementation.", 
        available: true,
        fileUrl: "/documents/Internship Realisation Document.pdf"
      },
      {
        name: "Reflection Document",
        description: "Critical analysis of professional growth, technical challenges, and strategic pivoting.", 
        available: true,
        fileUrl: "/documents/Reflection Document.pdf"
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
              <BsDatabaseFillAdd />
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
                  <strong>Mentor:</strong> {internshipData.mentor}
                </div>
              </div>
            </div>
          </div>
          
          <div className="internship-content">
            <section className="summary-section">
              <h3 className="section-title">Summary</h3>
              <p className="summary-text" style={{ whiteSpace: 'pre-line' }}>{internshipData.summary}</p>
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
              <div className="documents-list">
                {internshipData.documents.map((doc, index) => (
                  <div key={index} className="document-item">
                    <div className="document-icon">
                      <BsFileEarmarkCheckFill />
                    </div>
                    <div className="document-info">
                      <h4 className="document-name">{doc.name}</h4>
                      <p className="document-description">{doc.description}</p>
                    </div>
                    <div className="document-actions">
                      {doc.available ? (
                        activeDocIndex === index ? (
                          /* Render two buttons when active */
                          <div className="action-buttons-group">
                            <a 
                              href={doc.fileUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="action-btn view-btn"
                            >
                              <BsEyeFill /> View
                            </a>
                            <a 
                              href={doc.fileUrl} 
                              download 
                              className="action-btn download-btn"
                            >
                              <BsCloudDownload /> Download
                            </a>
                          </div>
                        ) : (
                          /* Render single button when inactive */
                          <button 
                            className="action-btn access-btn"
                            onClick={() => setActiveDocIndex(index)}
                          >
                            Access File
                          </button>
                        )
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