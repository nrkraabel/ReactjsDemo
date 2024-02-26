import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import social media icons
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h2>About Page</h2>
      <p className="about-text">
        Welcome to my website. Include details about self here</p>
      <div className="social-media-links">
        <a href="https://twitter.com" className="social-link twitter"><FaTwitter /></a>
        <a href="https://linkedin.com" className="social-link linkedin"><FaLinkedin /></a>
        <a href="https://github.com" className="social-link github"><FaGithub /></a>
        <a href="mailto:example@example.com" className="social-link email"><FaEnvelope /></a>
      </div>
    </div>
  );
}

export default About;
