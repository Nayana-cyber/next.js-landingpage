import React from 'react';
import './support.css'

const SupportPage = () => {
  return (
    <div className="container mx-auto p-4 background flex">
     <video width="500"height="500" controls>
                        <source src="/support video.mp4"/>
                        Your browser does not support the video tag.
                    </video>
      <div className="w-1/2"> 
        <h1 className="text-3xl font-bold mb-4 text-center"> OUR SUPPORT </h1>
        
        <section className="faqs mb-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <span className="mr-2">📋</span>
            Frequently Asked Questions
          </h2>
          <ul>
            <li className="mb-2">
              <strong>Q: What should I bring to my first yoga class?</strong>
              <p>A: Bring a yoga mat, water bottle, and wear comfortable clothing.</p>
            </li>
            <li className="mb-2">
              <strong>Q: Do I need to book in advance?</strong>
              <p>A: Yes, we recommend booking your spot in advance to ensure availability.</p>
            </li>
            
          </ul>
        </section>

        <section className="support-options mb-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <span className="mr-2">💼</span> 
            Support Options
          </h2>
          <p>Membership details: Join our community for exclusive benefits.</p>
          <p>Donations: Support our project by making a donation.</p>
          <p>Volunteering: Get involved by volunteering with us.</p>
        </section>

        <section className="resources mb-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <span className="mr-2">📚</span> 
            Resources
          </h2>
          <ul>
            <li><a href="/pdf.pdf" className="text-blue-500">Downloadable PDF Guide</a></li>
            <li><a href="/tutorial.mp4" className="text-blue-500">Video Tutorials</a></li>
          </ul>
        </section>

       

        
        <section className="testimonials mb-6 p-4 border rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <span className="mr-2">🌟</span> 
            Testimonials
          </h2>
          <p>"The support team was incredibly helpful!" - Jane Doe</p>
          <p>"I love the resources provided, they really helped me!" - John Smith</p>
        </section>

       
      </div>
    </div>
  );
};

export default SupportPage;