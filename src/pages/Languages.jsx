import SkillBar from '../components/ui/SkillBar';
import './Languages.css';

const Languages = () => {
  const languagesData = [
    {
        language: 'English',
        percentage: 100,
        level: 'Second Language'
    },
    {
      language: 'Turkish',
      percentage: 100,
      level: 'First Language'
    }
  ];

  return (
    <div className="languages-page">
      <div className="container">
        <h1 className="page-title">Language Proficiency</h1>
        
        <div className="languages-container">
          {languagesData.map((lang, index) => (
            <div key={index} className="language-item">
              <div className="language-header">
                <h3 className="language-name">{lang.language}</h3>
                <span className="language-percentage">{lang.percentage}%</span>
              </div>
              
              <SkillBar 
                name="" 
                percentage={lang.percentage} 
                color={getColorForPercentage(lang.percentage)} 
              />
              
              <p className="language-level">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to generate color based on percentage
const getColorForPercentage = (percentage) => {
  if (percentage >= 90) return '#64FFDA';
  if (percentage >= 70) return '#4a9dff';
  if (percentage >= 50) return '#9d65ff';
  return '#ff6565';
};

export default Languages;