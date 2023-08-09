// TestimonialSection.js
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';

const TestimonialSection = () => {
  const testimonialData = [
    {
      name: 'Client Name 1',
      profession: 'Profession 1',
      testimonial:
        'Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
      imgSrc: 'img/testimonial-1.jpg',
    },
    {
      name: 'Client Name 2',
      profession: 'Profession 2',
      testimonial:
        'Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
      imgSrc: 'img/testimonial-2.jpg',
    },
    {
      name: 'Client Name 3',
      profession: 'Profession 3',
      testimonial:
        'Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet',
      imgSrc: 'img/testimonial-3.jpg',
    },
  ];

  const carouselOptions = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Testimonial</div>
            <h1 className="mb-4">What Say Our Clients!</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
              Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod
              magna dolore erat amet
            </p>
            <a className="btn btn-primary rounded-pill px-4" href="">
              Read More
            </a>
          </div>
          <div className="col-lg-7">
            <OwlCarousel className="owl-carousel testimonial-carousel border-start border-primary" {...carouselOptions}>
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="testimonial-item ps-5">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p className="fs-4">{testimonial.testimonial}</p>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial.imgSrc} alt="" />
                    <div className="ps-3">
                      <h5 className="mb-1">{testimonial.name}</h5>
                      <span>{testimonial.profession}</span>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
