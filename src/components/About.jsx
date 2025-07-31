
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5 animate-fade-in">
              <h2 className="display-4 fw-bold text-dark-pink mb-3">About Me</h2>
              <div className="bg-primary-pink mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
            
            <div className="elegant-card p-5">
              <p className="lead text-muted mb-4">
                I am an Electronics and Communication Engineering student driven by a passion for technology, 
                innovation and creative thinking. I am actively seeking opportunities to learn and contribute 
                meaningfully to real world applications.
              </p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary-pink rounded-circle p-2 me-3">
                      <div className="bg-white rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-dark-pink mb-2">Innovation Focused</h5>
                      <p className="text-muted small mb-0">
                        Passionate about finding creative solutions to complex technical challenges
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary-pink rounded-circle p-2 me-3">
                      <div className="bg-white rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-dark-pink mb-2">Continuous Learning</h5>
                      <p className="text-muted small mb-0">
                        Always eager to explore new technologies and expand my skillset
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary-pink rounded-circle p-2 me-3">
                      <div className="bg-white rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-dark-pink mb-2">Real-world Impact</h5>
                      <p className="text-muted small mb-0">
                        Focused on creating meaningful contributions to practical applications
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary-pink rounded-circle p-2 me-3">
                      <div className="bg-white rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                    </div>
                    <div>
                      <h5 className="fw-semibold text-dark-pink mb-2">Collaborative Spirit</h5>
                      <p className="text-muted small mb-0">
                        Strong communication skills and team-oriented approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
