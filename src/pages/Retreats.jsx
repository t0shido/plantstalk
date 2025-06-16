import React from 'react';
import '../styles/Retreats.css';

const Retreats = () => {
  return (
    <div className="retreats-container">
      <section className="retreats-hero">
        <h1>Our Retreat Programs</h1>
        <p>Transformative experiences for healing and growth</p>
      </section>

      <section className="retreat-intro">
        <p>
          Our plant medicine retreats are carefully designed to provide profound healing 
          experiences in a safe, supportive environment. Each retreat includes preparation 
          guidance, sacred ceremonies, integration activities, and follow-up support.
        </p>
      </section>

      <section className="retreat-programs">
        <div className="retreat-card">
          <div className="retreat-image"></div>
          <div className="retreat-content">
            <h2>Weekend Immersion</h2>
            <p className="retreat-duration">3 Days / 2 Nights</p>
            <p className="retreat-description">
              Our introductory retreat is perfect for those new to plant medicine or seeking 
              a shorter experience. The weekend includes two ceremonies, preparation and 
              integration workshops, meditation, and communal meals.
            </p>
            <h3>What's Included:</h3>
            <ul>
              <li>Pre-retreat preparation guidance</li>
              <li>2 sacred plant medicine ceremonies</li>
              <li>Comfortable shared accommodation</li>
              <li>Organic, plant-based meals</li>
              <li>Integration workshops</li>
              <li>2 weeks post-retreat support</li>
            </ul>
            <p className="retreat-price">From $1,200 per person</p>
            <button className="retreat-button">Learn More</button>
          </div>
        </div>

        <div className="retreat-card">
          <div className="retreat-image"></div>
          <div className="retreat-content">
            <h2>Week-long Journey</h2>
            <p className="retreat-duration">7 Days / 6 Nights</p>
            <p className="retreat-description">
              Our comprehensive retreat allows for deeper healing through multiple ceremonies 
              and extended integration work. This immersive experience includes various healing 
              modalities, personal guidance, and community connection.
            </p>
            <h3>What's Included:</h3>
            <ul>
              <li>Comprehensive preparation process</li>
              <li>3-4 sacred plant medicine ceremonies</li>
              <li>Private or shared accommodation</li>
              <li>All meals and snacks (organic, plant-based)</li>
              <li>Daily yoga and meditation</li>
              <li>Integration workshops and creative expression</li>
              <li>One-on-one healing sessions</li>
              <li>4 weeks post-retreat integration support</li>
            </ul>
            <p className="retreat-price">From $2,800 per person</p>
            <button className="retreat-button">Learn More</button>
          </div>
        </div>

        <div className="retreat-card">
          <div className="retreat-image"></div>
          <div className="retreat-content">
            <h2>Personal Healing Intensive</h2>
            <p className="retreat-duration">Custom Duration</p>
            <p className="retreat-description">
              For those seeking individualized attention and a personalized healing journey, 
              our one-on-one retreats offer private ceremonies and dedicated support from our 
              experienced facilitators.
            </p>
            <h3>What's Included:</h3>
            <ul>
              <li>In-depth preparation and assessment</li>
              <li>Private ceremonies tailored to your needs</li>
              <li>Private accommodation</li>
              <li>Personalized meal plan</li>
              <li>Daily one-on-one integration sessions</li>
              <li>Complementary healing modalities</li>
              <li>3 months integration support</li>
            </ul>
            <p className="retreat-price">Starting at $5,500</p>
            <button className="retreat-button">Inquire Now</button>
          </div>
        </div>
      </section>

      <section className="retreat-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Is plant medicine right for me?</h3>
          <p>
            Plant medicine work can be profoundly healing but isn't suitable for everyone. 
            We conduct thorough health screenings and consultations to ensure it's appropriate 
            for your situation. Certain medical conditions and medications may contraindicate 
            participation.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do I prepare for a retreat?</h3>
          <p>
            Upon registration, you'll receive detailed preparation guidelines. Generally, we 
            recommend following a clean diet, reducing media consumption, spending time in nature, 
            and setting clear intentions in the weeks before your retreat.
          </p>
        </div>
        <div className="faq-item">
          <h3>What integration support do you provide?</h3>
          <p>
            Integration is a crucial part of the healing process. We provide group integration 
            circles during retreats, follow-up calls after you return home, and access to our 
            online community. Additional one-on-one integration sessions are available.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Retreats;
