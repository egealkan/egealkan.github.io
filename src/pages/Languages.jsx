import useDocumentTitle from '../hooks/useDocumentTitle';
import './Languages.css';

const Languages = () => {
  useDocumentTitle('Languages');
  const languagesData = [
    {
      language: 'English',
      level: 'Fluent',
      proficiency: 5
    },
    {
      language: 'Turkish',
      level: 'Fluent',
      proficiency: 5
    }
  ];

  const getProficiencyIndicator = (level) => {
    const levels = ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Fluent'];
    const currentIndex = levels.indexOf(level);
    
    return (
      <div className="proficiency-indicator">
        {levels.map((levelName, index) => (
          <div 
            key={index} 
            className={`proficiency-dot ${index <= currentIndex ? 'active' : ''}`}
            title={levelName}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="languages-page">
      <div className="container">
        <h1 className="page-title">Language Proficiency</h1>
        
        <div className="languages-container">
          {languagesData.map((lang, index) => (
            <div key={index} className="language-item">
              <div className="language-header">
                <h3 className="language-name">{lang.language}</h3>
                <span className="language-level">{lang.level}</span>
              </div>
              
              {getProficiencyIndicator(lang.level)}
              
              <div className="language-description">
                {lang.language === 'Turkish' ? 'First Language' : 'Second Language'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;