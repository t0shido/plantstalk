import React, { useState } from 'react';
import '../styles/Contact.css';
import '../styles/ModernContact.css';
import '../styles/ModernTheme.css';
import '../styles/LeafDecorations.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-container modern-container">
      <section className="contact-hero">
        <div className="hero-text-container">
          <h1>Contact Us</h1>
          <p>Reach out with questions or to begin your healing journey</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2 className="modern-section-title">Get in Touch</h2>
          <p>
            We're here to answer any questions you may have about our retreats, 
            plant medicines, or healing practices. Feel free to reach out through 
            the form or using the contact information below.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="icon email-icon"></i>
              <div>
                <h3>Email</h3>
                <p>info@plantstalk.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="icon phone-icon"></i>
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="icon location-icon"></i>
              <div>
                <h3>Retreat Location</h3>
                <p>Sacred Valley, Peru</p>
                <p>Exact location provided upon registration</p>
              </div>
            </div>
          </div>
          
          <div className="consultation-cta">
            <h3>Schedule a Free Consultation</h3>
            <p>
              Not sure which retreat is right for you? Schedule a free 30-minute 
              consultation with one of our facilitators to discuss your healing journey.
            </p>
            <button className="consultation-button modern-button">Book Consultation</button>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2 className="modern-section-title">Send a Message</h2>
          {formSubmitted ? (
            <div className="form-success-message">
              <p>Thank you for reaching out! We'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Retreat Information">Retreat Information</option>
                  <option value="Booking Question">Booking Question</option>
                  <option value="Medical Concern">Medical Concern</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button modern-button">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
