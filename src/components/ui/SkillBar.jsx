import './SkillBar.css';

const SkillBar = ({ name, color }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar" 
          style={{ 
            width: `100%`, // Always full width since no percentages
            backgroundColor: color || 'var(--color-primary-accent)'  
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;