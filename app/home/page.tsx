import React from 'react'

import './home.css'; 

const page = () => {
  return (
    <div className="main"> 
        <h1 className="title">WELCOME TO NEW ERA 💚</h1>
        <p className="description">"Your Next Big Step Starts Here"</p>
        
        <p>Step into a world of simplicity and clarity. Our homepage is designed to calm the mind and spark curiosity with its soft, inviting visuals and user-friendly structure. Featuring a clean layout and a harmonious color palette of pastel tones, every element on the page feels thoughtfully placed and effortless to navigate.</p> <br /> <br />
        
        <h1 className='features'>OUR FEATURES</h1> <br />
        <ul>
            <li><strong>CONSULTING:</strong>  Personalized guidance to elevate your business.</li>
            <li> <strong>CUSTOM SOLUTIONS :</strong>Tailored to fit your needs perfectly.</li>
            <li> <strong>24/7 SUPPORT:</strong> Always here when you need us.</li>
        </ul>
        <footer className="footer">
            <p>Contact us at: info@example.com</p>
        </footer>
    </div>
  )
}

export default page