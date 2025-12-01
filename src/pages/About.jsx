import { useState } from 'react';
import ReadingProgressBar from '../components/ui/ReadingProgressBar';
import ScrollReveal from '../components/ui/ScrollReveal';
import { FaLanguage } from "react-icons/fa";
import './About.css';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const softSkills = [
    {
      category: 'Communication & Leadership',
      skills: [
        'Clear technical communication with stakeholders',
        'Team collaboration and cross-functional coordination',
        'Mentoring junior developers and peers',
        'Presenting complex AI concepts to non-technical audiences',
        'Active listening and feedback incorporation'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C23 18.1645 22.7045 17.3541 22.1679 16.7078C21.6313 16.0615 20.8902 15.6188 20.07 15.4487" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      category: 'Problem Solving & Innovation',
      skills: [
        'Breaking down complex problems into manageable components',
        'Creative thinking for AI solution design',
        'Research and rapid learning of new technologies',
        'Analytical thinking and data-driven decision making',
        'Adaptability to changing project requirements'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      category: 'Project Management & Organization',
      skills: [
        'Time management and meeting project deadlines',
        'Prioritizing tasks in multi-project environments',
        'Documentation and knowledge sharing',
        'Quality assurance and attention to detail',
        'Agile methodology and iterative development'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14H10V16H8V14Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 14H16V16H14V14Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const personalInfo = [
    {
      category: 'Contact Details',
      details: (
        <div className="about-contact-details">
          <p><strong>Email:</strong> egemenalkan90@gmail.com</p>
          <p><strong>Address:</strong> Geel Belgium</p>
          <a href="https://linkedin.com/in/egemen-alkan" target="_blank" rel="noopener noreferrer" className="about-linkedin-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            LinkedIn Profile
          </a>
        </div>
      ),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      category: 'Work Preference',
      details: 'Open to all work arrangements including remote, hybrid, and on-site positions. Interested in AI/ML roles, data engineering positions, and full-stack development opportunities.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      category: 'Languages',
      details: (
        <div className="about-contact-details">
          <p><strong>English:</strong> Fluent</p>
          <p><strong>Turkish:</strong> Fluent</p>
        </div>
      ),
      icon: (
        <FaLanguage />
      )
    }
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mgvaegzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="about-page">
      <ReadingProgressBar />
      <div className="container">
        <ScrollReveal>
          <h1 className="about-page-title">About Myself</h1>
        </ScrollReveal>
        
        {/* Professional Introduction */}
        <ScrollReveal>
        <section className="about-intro-section">
          <div className="about-intro-card">
            <div className="about-profile-section">
              <div className="about-avatar">
                <img 
                  src="/profile-picture.jpg" 
                  alt="Egemen Alkan" 
                  className="about-avatar-image"
                />
              </div>
              
              <div className="about-intro-content">
                <h2 className="about-intro-title">Aspiring AI Developer & Data Engineer</h2>
                <p className="about-intro-description">
                  I'm a dedicated Applied Computer Science student specializing in Artificial Intelligence at Thomas More University. 
                  With a passion for leveraging AI technologies to solve complex problems, I focus on machine learning, deep learning, 
                  and data science applications that deliver real-world impact.
                </p>
                
                <p className="about-intro-description">
                  Since 2019, I've been developing my technical foundation through hands-on projects that demonstrate my ability to 
                  create innovative solutions. My approach combines strong analytical thinking with creative problem-solving, 
                  always keeping the end-user experience at the forefront.
                </p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>
        

        {/* Soft Skills Section */}
        <ScrollReveal>
        <section className="about-skills-section">
          <h2 className="about-section-title">Professional Soft Skills</h2>
          <p className="about-section-subtitle">Key competencies that drive my success in IT and AI development</p>
          
          <div className="about-skills-grid">
            {softSkills.map((skillGroup, index) => (
              <div key={index} className="about-skill-card">
                <div className="about-skill-header">
                  <div className="about-skill-icon">
                    {skillGroup.icon}
                  </div>
                  <h3 className="about-skill-category">{skillGroup.category}</h3>
                </div>
                
                <ul className="about-skill-list">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="about-skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        </ScrollReveal>
        

        {/* Personal Information */}
        <ScrollReveal>
        <section className="about-info-section">
          <h2 className="about-section-title">Professional Information</h2>
          
          <div className="about-info-container">
            {personalInfo.map((info, index) => (
              <div key={index} className="about-info-card">
                <div className="about-info-icon">
                  {info.icon}
                </div>
                <div className="about-info-content">
                  <h3 className="about-info-category">{info.category}</h3>
                  <div className="about-info-details">{info.details}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        </ScrollReveal>
        

        {/* Contact Form */}
        <ScrollReveal>
        <section className="about-contact-section">
          {submitStatus === 'success' ? (
            <div className="about-contact-form">
              <div className="about-success-message">
                <h2 className="about-contact-title">Message Sent!</h2>
                <p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
              </div>
            </div>
          ) : (
            <form className="about-contact-form" onSubmit={handleSubmit}>
              <h2 className="about-contact-title">Get In Touch</h2>
              
              {submitStatus === 'error' && (
                <div className="about-error-alert">
                  Something went wrong. Please try again or contact me directly via email.
                </div>
              )}
              
              <div className="about-form-group">
                <label htmlFor="name">Your Name*</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <div className="about-error-message">{errors.name}</div>}
              </div>
              
              <div className="about-form-group">
                <label htmlFor="email">Your Email*</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <div className="about-error-message">{errors.email}</div>}
              </div>
              
              <div className="about-form-group">
                <label htmlFor="message">Message*</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="5" 
                  placeholder="Type your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <div className="about-error-message">{errors.message}</div>}
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary about-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;