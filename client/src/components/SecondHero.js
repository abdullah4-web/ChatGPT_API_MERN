import React from 'react';
import heroimg from '../img/hero-img.png'

const SecondHero = ({ Title }) => {
  return (
    <div className="container-fluid pt-5 bg-primary hero-header">
      <div className="container pt-5 ">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <h1 className="display-4 text-white mb-4 animated slideInRight">{ Title }</h1>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <img className="img-fluid" src={heroimg} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHero;
