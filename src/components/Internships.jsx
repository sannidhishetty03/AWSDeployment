
import React from 'react';

const Internships = () => {
  const experiences = [
    {
      title: "Product Development Intern",
      company: "Experimind Labs Pvt Ltd.",
      period: "Internship",
      description: "Worked with Arduino IDE, drafted technical content for student curriculum and served as a narrator for educational videos.",
      highlights: ["Arduino IDE Development", "Technical Content Creation", "Educational Video Narration"]
    },
    {
      title: "Case Study Research",
      company: "Cashew Processing Industry",
      period: "Research Project",
      description: "Conducted a case study on the industrial processing of cashews at a manufacturing unit, analyzing operational efficiency and processes.",
      highlights: ["Industrial Process Analysis", "Operational Efficiency Study", "Manufacturing Research"]
    }
  ];

  return (
    <section id="internships" className="py-5 section-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5 animate-fade-in">
              <h2 className="display-4 fw-bold text-dark-pink mb-3">Experience</h2>
              <div className="bg-primary-pink mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
            
            <div className="row">
              {experiences.map((exp, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="elegant-card h-100 p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div className="bg-primary-pink rounded-circle p-2 me-3 mt-1">
                        <span className="text-white">💼</span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-semibold text-dark-pink mb-1">{exp.title}</h5>
                        <h6 className="text-muted mb-2">{exp.company}</h6>
                        
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          <div className="d-flex align-items-center text-muted small">
                            <span className="me-1">📍</span>
                            {exp.location}
                          </div>
                          <div className="d-flex align-items-center text-muted small">
                            <span className="me-1">📅</span>
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted mb-3">{exp.description}</p>
                    
                    <div className="d-flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="badge bg-light-pink text-dark border border-primary-pink px-2 py-1 rounded-pill small"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
