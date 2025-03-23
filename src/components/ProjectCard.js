import React from 'react';
import './ProjectCard.css'; // Optional for additional styling

const ProjectCard = ({ title, description, image, github }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description || 'No description available.'}</p>
      <a href={github} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
