import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/ModernTheme.css';
import '../styles/LeafDecorations.css';
import '../styles/ModernComponents.css';

const Home = () => {
  return (
    <div className="home-container modern-theme">
      <section className="hero-section modern-hero">
        <div className="hero-content modern-hero-content">
          <h1 className="modern-hero-title">Welcome to PlantsTalk Retreat</h1>
          <p className="modern-hero-description">Discover healing and transformation through sacred plant medicine in a safe, supportive environment</p>
          <div className="hero-spacer"></div>
          <div className="hero-buttons">
            <Link to="/retreats" className="cta-button modern-button">Explore Retreats</Link>
            <Link to="/contact" className="secondary-button modern-button outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="intro-section modern-section">
        <div className="intro-header">
          <h2 className="modern-section-title">Healing Through Nature's Wisdom</h2>
        </div>
        
        <div className="intro-content">
          <div className="intro-text">
            <p className="intro-paragraph">
              At PlantsTalk, we offer transformative plant medicine retreats in a safe, 
              supportive environment guided by experienced facilitators. Our ceremonies 
              honor traditional practices while providing modern integration support.
            </p>
            <p className="intro-paragraph">
              Each retreat is designed to foster deep healing, personal growth, and 
              spiritual connection through carefully guided experiences with sacred plants.
            </p>
          </div>
          
          <div className="intro-image">
            <div className="image-placeholder">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        
        <div className="intro-features-container">
          <div className="intro-features">
            <div className="feature green-accent">
              <div className="feature-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="feature-text">Traditional Wisdom</div>
            </div>
            <div className="feature green-accent">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="feature-text">Modern Integration</div>
            </div>
            <div className="feature green-accent">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="feature-text">Compassionate Care</div>
            </div>
          </div>
        </div>
      </section>

      <section className="offerings-section modern-section">
        <div className="offerings-container">
          <div className="offerings-header">
            <h2 className="modern-section-title">Our Retreats</h2>
          </div>
          
          <div className="offerings-grid">
            <div className="offering-card modern-card">
              <div className="offering-image weekend-retreat">
                <div className="offering-badge">Most Popular</div>
              </div>
              <div className="offering-content">
                <h3>Weekend Immersion</h3>
                <p>A 3-day introduction to plant medicine in a supportive group setting.</p>
                <Link to="/retreats" className="offering-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
            
            <div className="offering-card modern-card">
              <div className="offering-image weeklong-retreat"></div>
              <div className="offering-content">
                <h3>Week-long Journey</h3>
                <p>Deeper healing through extended ceremonies and integration practices.</p>
                <Link to="/retreats" className="offering-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
            
            <div className="offering-card modern-card">
              <div className="offering-image personal-retreat"></div>
              <div className="offering-content">
                <h3>Personal Healing</h3>
                <p>One-on-one guided sessions tailored to your specific healing needs.</p>
                <Link to="/retreats" className="offering-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          
          <div className="offerings-cta">
            <Link to="/retreats" className="cta-button modern-button">View All Retreat Options</Link>
          </div>
        </div>
      </section>

      <section className="testimonials-section modern-section">
        <h2 className="modern-section-title">Transformation Stories</h2>
        <div className="section-subtitle modern-section-subtitle">Real experiences from our community</div>
        <div className="testimonials-container">
          <div className="testimonial modern-card">
            <div className="testimonial-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"My experience at PlantsTalk completely transformed my relationship with myself. The facilitators created such a safe space for deep healing."</p>
            <span className="testimonial-author">- Maria K.</span>
          </div>
          <div className="testimonial modern-card">
            <div className="testimonial-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"After years of therapy, my retreat at PlantsTalk helped me break through patterns I couldn't address any other way. Profound gratitude."</p>
            <span className="testimonial-author">- James T.</span>
          </div>
        </div>
      </section>
      
      <section className="newsletter-section modern-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="modern-section-title">Join Our Community</h2>
            <p className="newsletter-description">Subscribe to receive updates on retreats, plant medicine insights, and integration practices.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-button modern-button">Subscribe</button>
            </form>
            <div className="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
