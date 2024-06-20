import React from 'react';
import './portfolioItem.css'



function PortfolioItem({ imgLocation, title, description, tags }) {
  return (
    <div className="card">
      <img src={imgLocation} alt={title} />
      <div className="title">{title}</div>
      <div className="content">
        <p>{description}</p>
        {tags && tags.length > 0 && (
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag},
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioItem;