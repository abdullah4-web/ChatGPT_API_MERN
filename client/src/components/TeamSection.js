import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Pro from '../img/pro.png';

const TeamSection = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Team</div>
            <h1 className="mb-4">Owner and CEO of AI </h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
              amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
              clita duo justo et tempor eirmod magna dolore erat amet</p>
            <a className="btn btn-primary rounded-pill px-4" href="">Read More</a>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="team-item bg-white text-center rounded p-4 pt-0">
                      <img className="img-fluid rounded-circle p-4" src={Pro} alt="Owner image" />
                      <h5 className="mb-0">Abdullah Shah</h5>
                      <small>Founder & CEO</small>
                      <div className="d-flex justify-content-center mt-3">
                        <a className="btn btn-square btn-primary m-1" href=""><FaFacebookF /></a>
                        <a className="btn btn-square btn-primary m-1" href=""><FaTwitter /></a>
                        <a className="btn btn-square btn-primary m-1" href=""><FaInstagram /></a>
                        <a className="btn btn-square btn-primary m-1" href=""><FaLinkedinIn /></a>
                      </div>
                    </div>
                  </div>
                  {/* Add other team members */}
                </div>
              </div>
              {/* Add other columns */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
