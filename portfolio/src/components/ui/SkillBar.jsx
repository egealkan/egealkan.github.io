import './SkillBar.css';

const SkillBar = ({ name, percentage, color }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar" 
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color || 'var(--color-teal)'  
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;