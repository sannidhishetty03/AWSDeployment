
import React from 'react';
import profileImage from '../assets/profile.jpg'; // Add your image in src/assets folder

const Hero = () => {
  return (
    <section id="home" className="min-vh-100 gradient-bg d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center animate-fade-in">

            {/* Profile Image Section */}
            <div className="mb-4">
              <div className="rounded-circle bg-white shadow-lg mx-auto mb-4 d-flex align-items-center justify-content-center"
                   style={{ width: '180px', height: '180px', overflow: 'hidden' }}>
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="img-fluid rounded-circle"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="display-3 fw-bold text-dark mb-3">
              Sannidhi S Shetty
            </h1>

            {/* Title */}
            <h2 className="h3 text-muted mb-4">
              Electronics & Communication Engineering Student
            </h2>

            {/* Tagline */}
            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Enthusiastic about technology and creative problem-solving, 
              eager to learn and contribute to impactful real-world applications.
            </p>

            {/* Contact Button */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <a href="mailto:sannidhishetty2003@gmail.com" 
                 className="btn btn-primary-pink btn-lg px-4 py-3">
                📧 Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

