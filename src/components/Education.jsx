
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "NMAM Institute of Technology - Nitte, Karkala",
      period: "2022-present",
      status: "Current"
    },
    {
      degree: "PCMB",
      institution: "Vidya Mandir Ind. PU College - Malleswaram, Bengaluru",
      period: "2019-2021",
      status: "Completed"
    },
    {
      degree: "SSLC",
      institution: "Hymamshu Jyoti Kala Peetha Composite PU College - Malleswaram, Bengaluru",
      period: "2018-2019",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-5 section-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5 animate-fade-in">
              <h2 className="display-4 fw-bold text-dark-pink mb-3">Education</h2>
              <div className="bg-primary-pink mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
            
            <div className="row">
              {education.map((edu, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="elegant-card h-100 p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary-pink rounded-circle p-2 me-3">
                        <span className="text-white">🎓</span>
                      </div>
                      <span className={`badge rounded-pill ${edu.status === 'Current' ? 'bg-primary-pink' : 'bg-secondary'}`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <h5 className="fw-semibold text-dark-pink mb-3">{edu.degree}</h5>
                    <p className="text-muted mb-3">{edu.institution}</p>
                    
                    <div className="d-flex align-items-center text-muted">
                      <span className="me-2">📅</span>
                      <small>{edu.period}</small>
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

export default Education;
