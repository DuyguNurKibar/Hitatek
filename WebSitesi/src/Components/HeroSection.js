import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Anavideo from './Videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Anavideo} autoPlay loop muted />
      <h1>Haber Bültenim<i className='fas fa-globe'></i></h1>
      <Link to="/Gündem" className="hero-text-link">
        <p>Gündemi Takipte Kal!</p>
      </Link>
      <div className='btns'>
        <Button 
          to='/Son-Dakika' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Son Dakika <i className='far fa-clock' />
        </Button>
        <Button 
          to='/Yerel-gündem' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Yerel Gündem  <i className='fas fa-globe-europe' />
        </Button>
        <Button 
          to='/Global-gündem' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Dünya Gündem  <i className='fas fa-globe-americas' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
