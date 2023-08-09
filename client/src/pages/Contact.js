import React, { useState } from 'react';
import NewsletterSection from '../components/NewsletterSection';
import NavBar from '../components/NavBar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xqkveolz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccessMessage('Form submitted successfully! We will get back to you soon.');
      setErrorMessage('');
    } else {
      setErrorMessage('Oops! Something went wrong. Please try again later.');
      setSuccessMessage('');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Contact Us</div>
            <h1 className="mb-4">If You Have Any Query, Please Contact Us</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              {successMessage && (
                <div className="alert alert-success mb-4">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="alert alert-danger mb-4">{errorMessage}</div>
              )}
              <div className="wow fadeIn" data-wow-delay="0.3s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: '150px' }} value={formData.message} onChange={handleInputChange} />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSection />
    </>
  );
};

export default ContactForm;
