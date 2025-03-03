import { JSX, useState } from 'react';
import styles from './SkillTree.module.css';

// Defined types for our skills
interface Skill {
  id: string;
  name: string;
  level: number;
  years: number;
  icon: JSX.Element;
  description: string;
  projects: string[];
  related: string[];
}

interface CategoryOption {
  id: string;
  name: string;
  icon: JSX.Element;
}

interface SkillsData {
  [key: string]: Skill[];
}

// Example data structure
const categories: CategoryOption[] = [
  { 
    id: 'frontend', 
    name: 'Frontend', 
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> 
  },
  { 
    id: 'backend', 
    name: 'Backend', 
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  },
  { 
    id: 'data', 
    name: 'Data & AI', 
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22H2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12V2H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  },
  { 
    id: 'devops', 
    name: 'DevOps', 
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  }
];

// Sample skill data
const skills: SkillsData = {
  frontend: [
    { 
      id: 'react', 
      name: 'React', 
      level: 90, 
      years: 3, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>, 
      description: 'Advanced component architecture, hooks, context API, and performance optimization',
      projects: ['Portfolio Website', 'E-commerce Dashboard', 'Social Media App'],
      related: ['javascript', 'typescript', 'css'] 
    },
    { 
      id: 'javascript', 
      name: 'JavaScript', 
      level: 85, 
      years: 4, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 8H17.5V15.5C17.5 17.43 15.93 19 14 19H10C8.07 19 6.5 17.43 6.5 15.5V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 8V5C8 3.34 9.34 2 11 2H13C14.66 2 16 3.34 16 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: 'ES6+, async programming, functional concepts, and DOM manipulation',
      projects: ['Interactive Data Visualizer', 'Real-time Chat Application'],
      related: ['typescript', 'react'] 
    },
    { 
      id: 'typescript', 
      name: 'TypeScript', 
      level: 80, 
      years: 2, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 2H9C7.89543 2 7 2.89543 7 4V6.5H3C1.89543 6.5 1 7.39543 1 8.5V15C1 16.1046 1.89543 17 3 17H7V20C7 21.1046 7.89543 22 9 22H21C22.1046 22 23 21.1046 23 20V4C23 2.89543 22.1046 2 21 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: 'Type systems, interfaces, generics, and advanced type manipulation',
      projects: ['Enterprise CRM System', 'API Integration Framework'],
      related: ['javascript', 'react'] 
    },
    // Add more frontend skills as needed
  ],
  backend: [
    { 
      id: 'python', 
      name: 'Python', 
      level: 95, 
      years: 5, 
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      description: 'FastAPI, Flask, Django, data processing, and AI/ML integration',
      projects: ['AI Chatbot', 'Data Processing Pipeline', 'REST API Service'],
      related: ['fastapi', 'django', 'machine-learning'] 
    },
    // Add more backend skills
  ],
  // Add other categories
};

const SkillTree = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  
  const handleSkillClick = (skill: Skill) => {
    setActiveSkill(activeSkill?.id === skill.id ? null : skill);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Skill Tree <span className={styles.versionTag}>v1.0</span>
        </h2>
        
        <div className={styles.categoryTabs}>
          {categories.map(category => (
            <div
              key={category.id}
              className={`${styles.categoryTab} ${
                activeCategory === category.id 
                  ? styles.categoryTabActive 
                  : styles.categoryTabInactive
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.icon}</span>
              {category.name}
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.skillGrid}>
        {skills[activeCategory]?.map(skill => (
          <div 
            key={skill.id}
            className={`${styles.skillCard} ${
              activeSkill?.id === skill.id 
                ? styles.skillCardActive 
                : styles.skillCardInactive
            }`}
            onClick={() => handleSkillClick(skill)}
          >
            <div className={styles.skillHeader}>
              <div className={styles.skillIconWrapper}>
                {skill.icon}
              </div>
              <div className={styles.skillInfo}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.skillExperience}>{skill.years} years experience</span>
              </div>
            </div>
            
            <div className={styles.skillProficiency}>
              <div className={styles.proficiencyHeader}>
                <span className={styles.proficiencyLabel}>Proficiency</span>
                <span className={styles.proficiencyLevel}>Level {Math.floor(skill.level / 10)}</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
            
            <div className={styles.connector}></div>
          </div>
        ))}
      </div>
      
      {activeSkill && (
        <div className={styles.skillDetail}>
          <div className={styles.skillDetailHeader}>
            <h3 className={styles.skillDetailName}>
              <div className={styles.skillDetailIcon}>
                {activeSkill.icon}
              </div>
              {activeSkill.name}
            </h3>
            
            <div className={styles.skillDetailBadge}>
              Level {Math.floor(activeSkill.level / 10)} • {activeSkill.level}XP
            </div>
          </div>
          
          <p className={styles.skillDescription}>{activeSkill.description}</p>
          
          <div>
            <h4 className={styles.sectionTitle}>Related Skills</h4>
            <div className={styles.relatedSkills}>
              {activeSkill.related.map(relatedId => (
                <span key={relatedId} className={styles.skillTag}>
                  {relatedId}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={styles.sectionTitle}>Featured Projects</h4>
            <ul className={styles.projectsList}>
              {activeSkill.projects.map((project, index) => (
                <li key={index} className={styles.projectItem}>
                  <span className={styles.projectDot}>•</span>
                  {project}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTree;