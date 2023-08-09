import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudySection = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Case Study</div>
          <h1 className="mb-4">Explore Our Recent AI Case Studies</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="case-item position-relative overflow-hidden rounded mb-2">
              <img className="img-fluid" src="img/project-1.jpg" alt="" />
              <a className="case-overlay text-decoration-none" href="">
                <small>Language Converter</small>
                <h5 className="lh-base text-white mb-3">Comming Soon ...</h5>
                <span className="btn btn-square btn-primary">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="case-item position-relative overflow-hidden rounded mb-2">
              <img className="img-fluid" src="img/project-2.jpg" alt="" />
              <a className="case-overlay text-decoration-none" href="">
                <small>Voice Changer </small>
                <h5 className="lh-base text-white mb-3">Comming Soon ... </h5>
                <span className="btn btn-square btn-primary">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
            <div className="case-item position-relative overflow-hidden rounded mb-2">
              <img className="img-fluid" src="img/project-3.jpg" alt="" />
              <a className="case-overlay text-decoration-none" href="">
                <small>Crypto Analizyer </small>
                <h5 className="lh-base text-white mb-3">Comming Soon ...</h5>
                <span className="btn btn-square btn-primary">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
