import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ name, bio, ctaText, ctaLink, contactText, contactLink }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div className="col-md-6 order-md-1">
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {name}
            </motion.h1>
            <motion.p 
              className="hero-bio"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {bio}
            </motion.p>
            <div className="hero-buttons mt-3">
              <motion.a 
                href={ctaLink} 
                className="btn btn-lg btn-primary me-2 hero-cta"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
              </motion.a>
              <motion.a 
                href={contactLink} 
                className="btn btn-lg btn-outline-light hero-contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {contactText}
              </motion.a>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <motion.div 
            className="col-md-6 order-md-2 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src="/images/hero-image.jpg" 
              alt="Hero" 
              className="img-fluid hero-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
