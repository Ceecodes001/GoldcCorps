import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import images from src/assets
import img1 from '../../../assets/image-1-Picsart-AiImageEnhancer.jpeg';
import img2 from '../../../assets/image-2.jpeg';
import img3 from '../../../assets/image-3.jpeg';
import img4 from '../../../assets/image-4.jpeg';

function Body() {
  const slides = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero">
      {/* Slide Background */}
      <div
        className="hero-slide active"
        style={{
          backgroundImage: `url(${slides[currentSlide]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      ></div>

      {/* Overlay content */}
      <div className="hero-overlay">
        <h2>Gold Corps - Your Premium Investment Partner</h2>
        <p>Empowering you to grow wealth with confidence.</p>

        {/* Signup rewired */}
        <Link to="/signup" >
        <button className="btn btn1">signup</button>
        </Link>

        <button className="btn">Subscribe to our newsletter</button>
      </div>
    </div>
  );
}

export default Body;
