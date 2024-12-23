import React from 'react';
import './careers.css';

const CareersPage = () => {
    return (
<div>
            <h1>Join Our Team</h1>
            <section className="introduction">
                <h2>Why Work With Us?</h2>
                <p>At our yoga project, we believe in fostering a supportive and inclusive culture. Our values are centered around wellness, community, and personal growth.</p>
            </section>
            <section className="job-listings">
                <h2>Job Opportunities</h2>
                <ul>
                    <li>
                        <h3>Yoga Instructor</h3>
                        <p>We are looking for passionate yoga instructors to join our team. Responsibilities include leading classes and creating a welcoming environment.</p>
                    </li>
                    <li>
                        <h3>Content Creator</h3>
                        <p>Join us as a content creator to help share our mission through engaging content across various platforms.</p>
                    </li>
                </ul>
            </section>
            <section className="application-process">
                <h2>How to Apply</h2>
                <p>Interested candidates can apply by uploading their resume and filling out our application form.</p>
                <form className="application-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="resume">Upload Resume:</label>
                        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
                    </div>
                    <button type="submit">Submit Application</button>
                </form>
            </section>
            <section className="testimonials">
                <h2>What Our Team Says</h2>
                <blockquote>
                    <p>"Working here has been a transformative experience. The community is incredibly supportive!" - Current Instructor</p>
                </blockquote>
            </section>
        </div>
    );
};

export default CareersPage;
