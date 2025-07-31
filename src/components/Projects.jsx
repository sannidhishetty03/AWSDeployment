
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "HAM Radio Workshop",
      description: "Took part in HAM Radio workshop conducted by NITK Surathkal where we learnt the functioning of HAM Radio.",
      icon: "📻",
      category: "Workshop",
      technologies: ["Radio Communication", "Electronics", "Signal Processing"]
    },
    {
      title: "Buck Converter",
      description: "Designed and implemented a Buck converter utilizing a MOSFET for voltage regulation applications.",
      icon: "⚡",
      category: "Circuit Design",
      technologies: ["Power Electronics", "MOSFET", "Voltage Regulation"]
    },
    {
      title: "Web Crawler",
      description: "Developed a Python based Web crawler to efficiently extract and analyze data from websites.",
      icon: "🌐",
      category: "Software Development",
      technologies: ["Python", "Web Scraping", "Data Analysis"]
    },
    {
      title: "Differential Amplifier",
      description: "Demonstrated working of a Differential Amplifier making use of 2n2222 transistor.",
      icon: "🔌",
      category: "Electronics",
      technologies: ["Analog Electronics", "Transistors", "Amplifier Design"]
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5 animate-fade-in">
              <h2 className="display-4 fw-bold text-dark-pink mb-3">Projects & Workshops</h2>
              <div className="bg-primary-pink mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
            
            <div className="row">
              {projects.map((project, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="elegant-card h-100 p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div className="bg-primary-pink rounded-circle p-3 me-3">
                        <span className="text-white fs-4">{project.icon}</span>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="fw-semibold text-dark-pink mb-0">{project.title}</h5>
                          <span className="badge bg-secondary-pink text-dark rounded-pill small">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted mb-3">{project.description}</p>
                    
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="badge bg-light-pink text-dark border border-primary-pink px-2 py-1 rounded-pill small"
                        >
                          {tech}
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

export default Projects;
