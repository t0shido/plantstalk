import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About PlantsTalk</h1>
        <p>Our journey, philosophy, and commitment to healing</p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <div className="story-image">
            {/* Placeholder for founder image */}
            <div className="image-placeholder"></div>
          </div>
          <div className="story-text">
            <p>
              PlantsTalk was founded in 2018 by a group of healers, therapists, and plant medicine 
              practitioners who recognized the profound healing potential of sacred plant ceremonies 
              when conducted with proper intention, preparation, and integration.
            </p>
            <p>
              After years of personal healing journeys and training with indigenous elders across 
              various traditions, our team came together to create a retreat center that honors 
              traditional wisdom while providing modern psychological support and integration practices.
            </p>
            <p>
              Our mission is to facilitate transformative healing experiences in a safe, ethical, 
              and supportive environment where participants can connect deeply with themselves, 
              nature, and the wisdom of plant teachers.
            </p>
          </div>
        </div>
      </section>

      <section className="our-team">
        <h2>Our Facilitators</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Elena Rodriguez</h3>
            <p className="member-title">Lead Facilitator & Founder</p>
            <p>
              With over 15 years of experience working with plant medicines and a background 
              in transpersonal psychology, Elena creates a container of deep safety and wisdom.
            </p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Michael Rainwater</h3>
            <p className="member-title">Integration Specialist</p>
            <p>
              A licensed therapist specializing in psychedelic integration, trauma healing, 
              and spiritual emergence, Michael helps participants process and integrate their experiences.
            </p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Sophia Chen</h3>
            <p className="member-title">Medicine Woman & Healer</p>
            <p>
              Trained in both Eastern and Amazonian healing traditions, Sophia brings a wealth 
              of knowledge about plant medicines and energetic healing practices.
            </p>
          </div>
        </div>
      </section>

      <section className="our-approach">
        <h2>Our Approach</h2>
        <div className="approach-content">
          <div className="approach-text">
            <h3>Safety First</h3>
            <p>
              We prioritize physical and psychological safety through careful screening, 
              preparation, and medical support during all ceremonies.
            </p>
            
            <h3>Honoring Traditions</h3>
            <p>
              We work respectfully with indigenous wisdom and practices, acknowledging 
              the cultural origins of the medicines we work with.
            </p>
            
            <h3>Integration Focus</h3>
            <p>
              We believe the real work happens after ceremony, providing extensive 
              integration support to help participants incorporate insights into daily life.
            </p>
          </div>
          <div className="approach-image">
            {/* Placeholder for approach image */}
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
