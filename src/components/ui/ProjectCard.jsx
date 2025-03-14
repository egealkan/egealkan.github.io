import { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, tags, steps, year } = project;
  const [activeStep, setActiveStep] = useState(null);
  
  const toggleStep = (stepId) => {
    if (activeStep === stepId) {
      setActiveStep(null);
    } else {
      setActiveStep(stepId);
    }
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {year && <span className="project-year">{year}</span>}
      </div>
      
      <p className="project-description">{description}</p>
      
      {tags && (
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      )}
      
      {steps && (
        <div className="project-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`project-step ${activeStep === index ? 'active' : ''}`}
              onClick={() => toggleStep(index)}
            >
              <div className="step-header">
                <div className="step-number">{index + 1}</div>
                <h4 className="step-title">{step.title}</h4>
              </div>
              
              {activeStep === index && (
                <div className="step-content">
                  <p>{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;