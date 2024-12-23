import React from 'react';
import './services.css';

const ServicesPage = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>We offer a variety of services to meet your needs:</p>
            <div className="services-list">
                <div className="service-item">
                    <h2>YOGA CLASSES</h2>
                    <p>"Stay motivated and achieve your goals in a dynamic group setting."</p>
                    <p>Our fitness classes are designed for all levels, whether you’re just starting your fitness journey or pushing towards new milestones.</p> <br />
                    <div className="video-container center">
                        
                        <video width="300" height="200" controls>
                            <source src="/tutorial.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                  
                </div>
                <div className="service-item">
                    <h2>FITNESS PROGRAMS</h2>
                    <p>"Personalized plans tailored to your unique needs."</p>
                    <p>Transform your fitness journey with our structured programs designed to deliver results. From weight loss and strength building to flexibility and endurance, we create customized programs that fit your goals, schedule, and lifestyle. Let’s craft a path that works for you, step by step.</p> <br />
                    <div className="video-container center">
                    <video width="300" height="200" controls>
                            <source src="/yoga day.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                       
                </div>
                <div className="service-item">
                    <h2>FITNESS CONSULTATION</h2>
                    <p>"Expert advice to set you on the right path."</p>
                    <p>Unsure where to start? Our fitness consultations are the perfect first step. We assess your current fitness level, discuss your goals, and develop a personalized plan that works best for you.</p> <br />
                  <div className="video-container center">
                    <video width="300" height="200" controls>
                        <source src="/consultation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
