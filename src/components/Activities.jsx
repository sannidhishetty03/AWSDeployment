
import React from 'react';

const Activities = () => {
  const activities = [
    {
      title: "MATLAB Certification",
      description: "Completed a certified course on MATLAB by MathWorks",
      icon: "🏆",
      category: "Certification"
    },
    {
      title: "Creation & Branding, Operations & Supply Chain",
      description: "Inside LVMH Certificate",
      icon: "🏆",
      category: "Certification"
    },
    {
      title: "Co-Head",
      description: "Documentation Committee, Incridea '25",
      icon: "👥",
      category: "Leadership"
    },
    {
      title: "Secretary",
      description: "Association of Computing Machinery (ACM-NMAMIT)",
      icon: "🏅",
      category: "Organization"
    },
    {
      title: "Documentation Head",
      description: "Theatre Club, NMAMIT",
      icon: "📝",
      category: "Club Activity"
    },
    {
      title: "Core Member",
      description: "COPE (Mental Health Club, NMAMIT)",
      icon: "💚",
      category: "Social Impact"
    },
    {
      title: "Operations Manager",
      description: "Finite Loop Club (Coding Club, NMAMIT)",
      icon: "⚙️",
      category: "Management"
    },
    {
      title: "Team Lead",
      description: "Fresher's Orientation Program (Placement Department, NMAMIT)",
      icon: "🎯",
      category: "Leadership"
    }
  ];

  return (
    <section id="activities" className="py-5 section-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="text-center mb-5 animate-fade-in">
              <h2 className="display-4 fw-bold text-dark-pink mb-3">Activities & Achievements</h2>
              <div className="bg-primary-pink mx-auto rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
            
            <div className="row">
              {activities.map((activity, index) => (
                <div key={index} className="col-lg-6 col-xl-4 mb-4">
                  <div className="elegant-card h-100 p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div className="bg-primary-pink rounded-circle p-2 me-3">
                        <span className="text-white">{activity.icon}</span>
                      </div>
                      <div className="flex-grow-1">
                        <span className={`badge rounded-pill small ${
                          activity.category === 'Leadership' ? 'bg-primary-pink' :
                          activity.category === 'Certification' ? 'bg-success' :
                          activity.category === 'Social Impact' ? 'bg-danger' :
                          'bg-secondary'
                        } text-white`}>
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    
                    <h6 className="fw-semibold text-dark-pink mb-2">{activity.title}</h6>
                    <p className="text-muted small mb-0">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Summary Stats */}
            <div className="row mt-5">
              <div className="col-md-3 col-6 mb-3">
                <div className="text-center elegant-card p-3">
                  <div className="h3 fw-bold text-dark-pink mb-1">7+</div>
                  <small className="text-muted">Leadership Roles</small>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="text-center elegant-card p-3">
                  <div className="h3 fw-bold text-dark-pink mb-1">5+</div>
                  <small className="text-muted">Club Activities</small>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="text-center elegant-card p-3">
                  <div className="h3 fw-bold text-dark-pink mb-1">2</div>
                  <small className="text-muted">Certification</small>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="text-center elegant-card p-3">
                  <div className="h3 fw-bold text-dark-pink mb-1">100%</div>
                  <small className="text-muted">Commitment</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
