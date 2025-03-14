import './AchievementCard.css';

const AchievementCard = ({ achievement }) => {
  const { title, period, description, tags } = achievement;

  return (
    <div className="achievement-card">
      {period && <div className="achievement-period">{period}</div>}
      
      <h3 className="achievement-title">{title}</h3>
      
      <p className="achievement-description">{description}</p>
      
      {tags && (
        <div className="achievement-tags">
          {tags.map((tag, index) => (
            <span key={index} className="achievement-tag">{tag}</span>
          ))}
        </div>
      )}
      
      <button className="achievement-details-btn">Click to see details</button>
    </div>
  );
};

export default AchievementCard;