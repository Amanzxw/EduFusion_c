import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styling

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Your Journey to Excellence Starts Here</h1>
        <strong><p>Embark on a journey <span className='highlight-color'>of excellence with our curated courses</span> for every learner.</p></strong>
        <button className='button'>Learn More</button>
        
        <div className='text'>
        <p> Public Speaking</p>
        <p> Carrer-Oriented</p>
        <p> Creative Thinking</p>

        </div>

      </div>
      <div className="hero-image">
      <img src="/images/edfusion photo.png" alt="EduFusion Photo" />
      </div>
    </div>
  );
};

export default Hero;
