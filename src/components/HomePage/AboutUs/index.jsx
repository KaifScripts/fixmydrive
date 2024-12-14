// AboutUs.jsx
import React from 'react';
import '@/styles.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title ban">ABOUT US</h1>
        <div className="about-us-text dm">
          <p >
            At FixMyDrive, we are revolutionizing the way vehicle repair and maintenance services are delivered. As an industry leader in mobile vehicle repair, maintenance, and inspection, our mission is simple: to leverage cutting-edge technology to service any vehicle, anywhere, at any time.
          </p>
          <p>
            At FixMyDrive, we are committed to offering low, fair, and transparent pricing, ensuring that you receive high-quality service without any hidden costs. Our team of skilled technicians is equipped with the latest tools and technology to handle a wide range of vehicle needs, from routine maintenance to complex repairs, making us your trusted partner in vehicle care.
          </p>
          <p>
            Choose FixMyDrive, and experience the convenience and efficiency of mobile vehicle services tailored to fit your busy lifestyle. We are here to keep you moving forward, wherever you are.
          </p>
        </div>
        <button className="explore-button ban">EXPLORE</button>
      </div>
      <div className="about-us-image"></div>
    </div>
  );
};

export default AboutUs;
