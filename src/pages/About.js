import React from 'react';
import AboutMe from '../components/AboutMe';

const About = () => {
  const aboutData = {
    description: "I am a dedicated and curious data science student with a passion for extracting valuable insights from data. My experience ranges from data analysis and visualization to machine learning and research.",
    skills: ["Python", "Data Analysis", "Machine Learning", "C++", "SQL", "Visualization"],
    interests: ["Data Analysis", "Machine Learning", "Big Data Technologies", "Problem Solving"]
  };

  return (
    <div>
      <AboutMe 
        description={aboutData.description}
        skills={aboutData.skills}
        interests={aboutData.interests}
      />
    </div>
  );
};

export default About;
