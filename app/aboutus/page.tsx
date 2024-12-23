import React from 'react';
import './about.css';

const page = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our organization! We are dedicated to providing exceptional services and support to our clients.</p>
      <h2>Our Mission</h2>
      <p>To empower businesses with innovative solutions and unparalleled support.</p>
      <h2>Meet Our Team</h2>
      <div className="team">
        <div className="team-member">
          <img src="/member1.jpeg" alt="John Doe" />
          <h3>Sonakshi nair</h3>
          <p>Founder</p>
        </div>
        <div className="team-member">
          <img src="/member2.jpeg" alt="Jane Smith" />
          <h3>Natasha rai</h3>
          <p>Yoga coach</p>
        </div>
      </div>
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        <blockquote>"This organization transformed our business!"</blockquote>
        <blockquote>"Exceptional service and support!"</blockquote>
      </div>
     
    </div>
  );
}

export default page;