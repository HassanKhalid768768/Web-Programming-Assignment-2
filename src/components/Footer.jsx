import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p>
              NovaPortfolio helps you create personalized and impactful portfolios.
              Showcase your projects, skills, and experience with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white text-decoration-none">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
              </li>
              <li>
                <Link to="/data-entry" className="text-white text-decoration-none">Data Entry</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <p>Stay connected through our social platforms:</p>
            <div className="d-flex">
              <a
                href="https://www.linkedin.com/in/hassankhalid768768/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/HassanKhalid768768"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/hassankhalid768768/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaInstagram size={24} />
              </a>
              <a href="mailto:hassankhalid768768@gmail.com" className="text-white">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="text-white" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} NovaPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
