import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero
        name="Muhammad Hassan Khalid"
        bio="Data Science enthusiast | FAST-NUCES student | Exploring insights in data | Passionate learner"
        ctaText="View My Work"
        ctaLink="/projects"
        contactText="Contact Me"
        contactLink="/contact"
      />
      {/* Additional Home page content */}
    </div>
  );
};

export default Home;
