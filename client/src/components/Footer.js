import React from 'react';
import { FaAngleRight, FaArrowUp } from 'react-icons/fa'; // Make sure FaArrowUp is imported here
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

// Rest of the Footer component code


const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                  AI<span className="text-primary">.</span>Tech
                </h1>
              </a>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
              </p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <FaMapMarkerAlt className="me-3" />123 Street, New York, USA
              </p>
              <p>
                <FaPhoneAlt className="me-3" />+012 345 67890
              </p>
              <p>
                <FaEnvelope className="me-3" />info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <FaTwitter />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaFacebookF />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaYoutube />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaInstagram />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>
              <a className="btn btn-link" href="">
                About Us <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Contact Us <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Career <FaAngleRight />
              </a>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <a className="btn btn-link" href="">
                Robotic Automation <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Machine learning <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Predictive Analysis <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Data Science <FaAngleRight />
              </a>
              <a className="btn btn-link" href="">
                Robot Technology <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
                {/* Credit link from the template */}
                Designed By{' '}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top */}
     
    </>
  );
};

export default Footer;
