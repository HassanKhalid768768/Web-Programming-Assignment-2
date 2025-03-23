import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = ({ description, skills, interests }) => {
  return (
    <motion.section 
      className="about-me-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className="about-me-title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.div 
        className="about-me-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/hero-image.jpg`} 
          alt="Profile" 
          className="about-profile-pic"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="about-description">{description}</p>
          <div className="about-section">
            <h4>Skills</h4>
            <ul className="about-list">
              {skills.map((skill, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ scale: 1.1, color: "#007bff" }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="about-section">
            <h4>Interests</h4>
            <ul className="about-list">
              {interests.map((interest, idx) => (
                <motion.li 
                  key={idx}
                  whileHover={{ scale: 1.1, color: "#007bff" }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  {interest}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
