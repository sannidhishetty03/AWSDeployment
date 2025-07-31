
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-pink py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <a href="mailto:sannidhishetty2003@gmail.com" className="text-dark text-decoration-none d-flex align-items-center gap-1">
                <span>📧</span>
                <small>sannidhishetty2003@gmail.com</small>
              </a>
              <a href="tel:+918660832366" className="text-dark text-decoration-none d-flex align-items-center gap-1">
                <span>📞</span>
                <small>+91 8660832366</small>
              </a>
            </div>
          </div>
          
          <div className="col-lg-6 text-lg-end">
            <p className="mb-0 text-dark small d-flex align-items-center justify-content-lg-end justify-content-start gap-1">
              Made with <span>💖</span> by Sannidhi S Shetty © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
