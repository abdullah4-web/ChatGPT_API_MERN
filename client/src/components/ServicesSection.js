import React from 'react';
import { FaRobot, FaPowerOff, FaGraduationCap, FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <div className="container-fluid bg-light mt-5 py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Services</div>
            <h1 className="mb-4">Our Excellent AI Solutions for Your Business</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
              amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
              clita duo justo et tempor eirmod magna dolore erat amet</p>
            <a className="btn btn-primary rounded-pill px-4" href="">Read More</a>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FaRobot className="fa-2x" />
                      </div>
                      <h5 className="mb-3">AI Chat Bot</h5>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                        diam sed stet lorem.</p>
                      <Link className="btn px-3 mt-auto mx-auto" to="/chatbot">Try Now</Link>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FaPowerOff className="fa-2x" />
                      </div>
                      <h5 className="mb-3">Generate Your Image With AI</h5>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                        diam sed stet lorem.</p>
                        <Link className="btn px-3 mt-auto mx-auto" to="/image">Try Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-md-4">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FaGraduationCap className="fa-2x" />
                      </div>
                      <h5 className="mb-3">Generate Paragraph</h5>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                        diam sed stet lorem.</p>
                        <Link className="btn px-3 mt-auto mx-auto" to="/paragraph">Try Now</Link>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div className="service-icon btn-square">
                        <FaBrain className="fa-2x" />
                      </div>
                      <h5 className="mb-3">HTML Code To JSX </h5>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                        diam sed stet lorem.</p>
                        <Link className="btn px-3 mt-auto mx-auto" to="/jsconverter">Try Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
