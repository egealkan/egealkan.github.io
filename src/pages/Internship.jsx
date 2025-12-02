// https://www.npmjs.com/package/react-icons
// https://react-icons.github.io/react-icons/
// https://fontawesome.com/

import { useState } from 'react';
import { BsCloudDownload } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { BsDatabaseFillAdd } from "react-icons/bs";
import ReadingProgressBar from '../components/ui/ReadingProgressBar';
import ScrollReveal from '../components/ui/ScrollReveal';
import CodeWindow from '../components/ui/CodeWindow.jsx';
import { VscFilePdf } from "react-icons/vsc";
import './Internship.css';

const Internship = () => {
  const [activeDocIndex, setActiveDocIndex] = useState(null);
  
  const internshipData = {
    title: "Transforming Production Planning Through Data Intelligence",
    company: "Estée Lauder Companies",
    period: "September 2025 - December 2025", // Adjusted based on typical fall semester, edit if needed
    location: "Oevel, Belgium",
    summary: `
      Designed and delivered a dual-workstream project to address critical operational bottlenecks in weekly planning meetings. The initiative transformed a historically reactive, manual data validation process into an automated, strategic decision-making workflow.
      
      The primary deliverable was an Enhanced Weekly Planning Report in Power BI that serves as an automated "Violation Tracker" for 10 complex planning rules. The secondary deliverable was a high-fidelity AI Planning Assistant prototype (built in Microsoft Copilot Studio) that enables natural language queries of live production data and procedural documentation, achieving a 100% success rate in technical benchmarking.
    `,
    daxexplanation: `A section to show the DAX code for the two most challenging rules that were implemented out of all the rules. The codes show the Weekly Changeover rule and the Duplicate Order Check rule.`,
    keyResponsibilities: [
      "Engineered an automated Power BI 'Violation Tracker' using advanced DAX logic to monitor 10 standard planning rules (e.g., Context-Aware Changeovers, Two-Step Duplicate Checks).",
      "Conducted a comprehensive technical feasibility study comparing Microsoft Copilot Studio, OpenAI, and Custom Python solutions against enterprise security requirements (Entra ID, In-Tenant Data Governance).",
      "Architected a Multi-Agent AI prototype in Copilot Studio that routes user intents between live Power BI data queries and SharePoint procedural documents.",
      "Developed and embedded a custom Power App to enable a 'Write-Back' workflow, allowing planners to log 'Agreed Violations' directly to a SharePoint backend.",
      "Solved complex Data Model Ambiguity challenges by implementing virtual tables (ADDCOLUMNS, RANKX) to handle non-linear production sequences."
    ],
    technologiesUsed: [
      "Power BI",
      "DAX", 
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
    learnings: [
      "Learned to balance technical perfection with business practicality by pivoting from OpenAI to Copilot Studio to meet strict Enterprise Security governance.",
      "Mastered the use of Virtual Tables in DAX to solve complex data model ambiguity challenges that standard relationships could not handle.",
      "Gained experience in navigating corporate IT structures and conducting feasibility studies to drive architectural decisions.",
      "Learned to unify the Power Platform stack by embedding Power Apps within Power BI, creating a seamless 'write-back' loop that bridges the gap between passive analytics and active workflow management.",
      "Gained deep expertise in DAX context transition and row-level evaluation, specifically by implementing virtual ranking tables to solve non-linear production sequence logic that standard data models could not handle.",
      "Developed advanced prompt engineering techniques for Microsoft Copilot Studio, learning how to structure agent instructions to ensure consistent, accurate retrieval from unstructured SharePoint documents.",
      "Understood the impact of digital transformation on human workflows, learning that successful tool deployment requires user-centric design to shift teams from manual verification to strategic decision-making.",
      "Improved the ability to translate abstract business needs (like 'reactive meetings') into concrete technical deliverables, effectively bridging the gap between operational planning and data engineering."
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
      <ReadingProgressBar />
      <div className="container">
        <h1 className="page-title">Internship Experience</h1>
        
        <div className="internship-container">
          <ScrollReveal>
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
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          
          <div className="internship-content">
            <ScrollReveal>
              <section className="summary-section">
                <h3 className="section-title">Summary</h3>
                <p className="summary-text" style={{ whiteSpace: 'pre-line' }}>{internshipData.summary}</p>
              </section>
            </ScrollReveal>
            
            
            <ScrollReveal>
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
            </ScrollReveal>

            <ScrollReveal>
              <h3 className="section-title">Code Snippets</h3>
              <section>
                <p className="summary-text" style={{ whiteSpace: 'pre-line' }}>{internshipData.daxexplanation}</p>
              </section>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}> {/* Optional styling to center it */}
                <CodeWindow 
                  files={[
                    {
                      fileName: 'Weekly Changeovers',
                      language: 'dax',
                      code: `Weekly Changeovers per Resource (Rule Based) = 
VAR ProductionLog =
    ADDCOLUMNS (
        'PPL1 Pivot',
        "SetUpGroup",
        VAR currentMaterial = RELATED ( 'VISION_Material Master'[Material] )
        RETURN
            CALCULATE (
                MIN ( 'SetUp Group'[SetUp Group] ),
                'SetUp Group'[Material] = currentMaterial
            )
    )
VAR RankedLog =
    ADDCOLUMNS (
        ProductionLog,
        "OrderRank", RANKX (
            FILTER (
                ProductionLog,
                'PPL1 Pivot'[Resource] = EARLIER ( 'PPL1 Pivot'[Resource] )
            ),
            'PPL1 Pivot'[Start Date],,
            ASC,
            Dense
        )
    )
VAR ChangeoverCount =
    COUNTROWS (
        FILTER (
            RankedLog,
            VAR CurrentResource = 'PPL1 Pivot'[Resource]
            VAR CurrentSetup = [SetUpGroup]
            VAR PreviousSetup =
                MAXX (
                    FILTER (
                        RankedLog,
                        'PPL1 Pivot'[Resource] = EARLIER ( 'PPL1 Pivot'[Resource] )
                            && [OrderRank] = EARLIER ( [OrderRank] ) - 1
                    ),
                    [SetUpGroup]
                )
            VAR WorkcenterType =
                LOOKUPVALUE (
                    'Slicer Resource'[Workcenter],
                    'Slicer Resource'[Resource], CurrentResource
                )
            VAR IsAChangeover =
                IF (
                    // Checks if the Workcenter is "Tubes".
                    WorkcenterType = "Tubes",
                    // If TRUE, compares the first 5 digits.
                    LEFT ( CurrentSetup, 5 ) <> LEFT ( PreviousSetup, 5 ),
                    // If FALSE (it's any other line), compares the first 8 digits.
                    LEFT ( CurrentSetup, 8 ) <> LEFT ( PreviousSetup, 8 )
                )
            RETURN
                IsAChangeover
                    && NOT ISBLANK ( PreviousSetup )
        )
    )
RETURN
    ChangeoverCount`
                    },
                    {
                      fileName: 'Duplicate Order Check',
                      language: 'dax',
                      code: `Duplicate Check = 
// 1. Get the rules and data for the current row.
//    value converts the MAXQ text value to a number for correct comparison.
VAR MaxOrderQuantity = VALUE(RELATED('Slicer Resource'[MaxOQ]))
VAR CurrentOrderQuantity = 'PPL1 Pivot'[Planned Quantity]

// 2. The rule only applies if the current order is smaller than its MAXQ.
RETURN
IF (
    CurrentOrderQuantity >= MaxOrderQuantity,
    "OK", // Large orders are not checked for duplication.
    (
        // 3. If a small order, get the details needed for the duplicate check.
        VAR CurrentOrderDate = 'PPL1 Pivot'[Start Date]
        // THIS IS THE KEY CHANGE: We now check by Material.
        VAR CurrentMaterial = 'PPL1 Pivot'[Product Number]
        VAR FourWeeksPrior = CurrentOrderDate - 28

        // 4. Count how many OTHER orders were planned for the SAME MATERIAL in the previous 4 weeks.
        VAR PreviousOrderCount =
            COUNTROWS (
                FILTER (
                    'PPL1 Pivot',
                    'PPL1 Pivot'[Product Number] = CurrentMaterial &&
                    'PPL1 Pivot'[Start Date] < CurrentOrderDate &&
                    'PPL1 Pivot'[Start Date] >= FourWeeksPrior
                )
            )
        // 5. If any previous order is found (count > 0), flag the current one as a duplicate.
        RETURN
            IF ( PreviousOrderCount > 0, "Duplicate", "OK" )
    )
)`
                    }
                  ]}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal></ScrollReveal>
            
            
            <ScrollReveal>
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
            </ScrollReveal>
            

            <ScrollReveal>
              <section className="internship-learnings-section" style={{marginTop: '2rem'}}>
                <h3 className="section-title">Key Takeaways & Growth</h3>
                <ul className="responsibility-list"> {/* Reusing list style for consistency */}
                  {internshipData.learnings.map((item, index) => (
                    <li key={index} className="responsibility-item">{item}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
            
            
            <ScrollReveal>
              <section className="documents-section">
                <h3 className="section-title">Supporting Documents</h3>
                <div className="documents-list">
                  {internshipData.documents.map((doc, index) => (
                    <div key={index} className="document-item">
                      <div className="document-icon">
                        <VscFilePdf />
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
            </ScrollReveal>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;