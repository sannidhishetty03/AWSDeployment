
import React from 'react';

const Skills = () => {
  const programminglang = [
    "Python", "C Language", "Perl", "System Verilog", 
    "Assembly language", "ReactJS", "Data Structures"
  ];

  const libraries = [
    "NumPy", "Pandas", 
    "Matplotlib", "Seaborn"
  ];

  const tools = [
    "PCB Designing using KiCad", "LT Spice", 
    "Cadence", "Visual Studio Code",
    "Arduino IDE", "Pycharm",
    "Dbeaver"
  ];

  const softSkills = [
    "Precision to detail", "Process driven", "Collaborative communication", 
    "Agile Prioritization", "Languages: English, Hindi, Kannada"
  ];


  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5 animate-fade-in">
              <h2 className="display-4 fw-bold text-dark-pink mb-3">Skills & Expertise</h2>
              <div className="bg-primary-pink mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
            
            <div className="row">
              {/* Langauges & Core concepts */}
              <div className="col-lg-6 mb-5">
                <div className="elegant-card h-100 p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary-pink rounded-circle p-3 me-3">
                      <span className="text-white">💻</span>
                    </div>
                    <h4 className="fw-semibold text-dark-pink mb-0">Langauges & Core concepts</h4>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2">
                    {programminglang.map((skill, index) => (
                      <span 
                        key={index}
                        className="badge bg-light-pink text-dark border border-primary-pink px-3 py-2 rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Libraries */}
              <div className="col-lg-6 mb-5">
                <div className="elegant-card h-100 p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-secondary-pink rounded-circle p-3 me-3">
                      <span className="text-white">🤝</span>
                    </div>
                    <h4 className="fw-semibold text-dark-pink mb-0">Libraries</h4>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2">
                    {libraries.map((skill, index) => (
                      <span 
                        key={index}
                        className="badge bg-secondary-pink text-dark px-3 py-2 rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools*/}
              <div className="col-lg-6 mb-5">
                <div className="elegant-card h-100 p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-secondary-pink rounded-circle p-3 me-3">
                      <span className="text-white">🤝</span>
                    </div>
                    <h4 className="fw-semibold text-dark-pink mb-0">Tools</h4>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2">
                    {tools.map((skill, index) => (
                      <span 
                        key={index}
                        className="badge bg-secondary-pink text-dark px-3 py-2 rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Soft Skills */}
              <div className="col-lg-6 mb-5">
                <div className="elegant-card h-100 p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-secondary-pink rounded-circle p-3 me-3">
                      <span className="text-white">🤝</span>
                    </div>
                    <h4 className="fw-semibold text-dark-pink mb-0">Soft Skills</h4>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <span 
                        key={index}
                        className="badge bg-secondary-pink text-dark px-3 py-2 rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
