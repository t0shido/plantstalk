import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to PlantsTalk Retreat</h1>
          <p>Discover healing and transformation through sacred plant medicine</p>
          <button className="cta-button">Book Your Journey</button>
        </div>
      </section>

      <section className="intro-section">
        <h2>Healing Through Nature's Wisdom</h2>
        <div className="intro-content">
          <div className="intro-text">
            <p>
              At PlantsTalk, we offer transformative plant medicine retreats in a safe, 
              supportive environment guided by experienced facilitators. Our ceremonies 
              honor traditional practices while providing modern integration support.
            </p>
            <p>
              Each retreat is designed to foster deep healing, personal growth, and 
              spiritual connection through carefully guided experiences with sacred plants.
            </p>
          </div>
          <div className="intro-image">
            {/* Image placeholder */}
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      <section className="offerings-section">
        <h2>Our Retreats</h2>
        <div className="offerings-grid">
          <div className="offering-card">
            <div className="offering-image"></div>
            <h3>Weekend Immersion</h3>
            <p>A 3-day introduction to plant medicine in a supportive group setting.</p>
          </div>
          <div className="offering-card">
            <div className="offering-image"></div>
            <h3>Week-long Journey</h3>
            <p>Deeper healing through extended ceremonies and integration practices.</p>
          </div>
          <div className="offering-card">
            <div className="offering-image"></div>
            <h3>Personal Healing</h3>
            <p>One-on-one guided sessions tailored to your specific healing needs.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Transformation Stories</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"My experience at PlantsTalk completely transformed my relationship with myself. The facilitators created such a safe space for deep healing."</p>
            <span className="testimonial-author">- Maria K.</span>
          </div>
          <div className="testimonial">
            <p>"After years of therapy, my retreat at PlantsTalk helped me break through patterns I couldn't address any other way. Profound gratitude."</p>
            <span className="testimonial-author">- James T.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
