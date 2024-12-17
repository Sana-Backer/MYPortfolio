import React from 'react';
import '../styles/about.css'
import about from '../assets/about.jpg'
const About = () => {
  return (
    <div className="container my-5" id='about'>
      {/* Why Hire Me Section */}
      <div className="row bg-dark text-light border rounded p-4">
        <div className="col-12 col-lg-5 mb-3 mb-lg-0 text-center">
          <img 
            src={about} 
            alt="Profile or Service" 
            className="img-fluid rounded" 
            style={{ maxHeight: '350px', width:"400px", objectFit: 'cover' }} 
          />
        </div>
        <div className="col-12 col-lg-7">
  <h4 className='text-center'>Why Hire Me?</h4>
  <p>
    As a passionate React developer, I thrive on building dynamic, responsive, and user-centric web applications. 
    With expertise in modern JavaScript frameworks and libraries, I specialize in crafting seamless front-end 
    interfaces and robust back-end solutions. My approach combines creativity, clean code, and performance 
    optimization to deliver intuitive digital experiences tailored to user needs.
  </p>
  <p>
    Whether it's developing single-page applications, integrating APIs, or implementing scalable state management, 
    I bring technical precision and a problem-solving mindset to every project. Let’s build something great together!
  </p>
</div>

      </div>

      {/* Services Section */}
      <div className="text-center my-5" id='services'>
        <h6>Services</h6>
        <h3 style={{ fontSize: '50px' }}>What I Do</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur.
        </p>

        <div className="row justify-content-center gap-3">
          <div className="cards col-12 col-md-3 border shadow p-5 text-center">
            <i className="fa-solid fa-crown fa-2x mb-3"></i>
            <h5>UI Design</h5>
            <p className="text-muted">Creating visually stunning interfaces for a seamless user experience.</p>
          </div>
          <div className="cards col-12 col-md-3 border shadow p-5 text-center">
            <i className="fa-solid fa-laptop fa-2x mb-3"></i>
            <h5>Web Design</h5>
            <p className="text-muted mt-3">Building modern, responsive, and high-performance websites.</p>
          </div>
          <div className="cards col-12 col-md-3 border shadow p-5 text-center">
          <i className="fa-solid fa-database fa-2x mb-3 "></i>
            <h5 className="text-dark">Back-end Development</h5>
            <p className="text-muted">Developing robust server-side applications and APIs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;