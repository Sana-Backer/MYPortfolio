import React from 'react';
import '../styles/home.css';
import myPhoto from '../assets/photo.png';
import myCv from '../assets/Sana-Thasneem-K-A-CV.pdf'
const Home = () => {
  return (
    <>
      <div className='container py-5' id='home'>
        <div className="row align-items-center mt-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h3 className='mt-5'>I'm</h3>
            <h1 className='display-4 fw-bold'> <span className='text-warning'>Sana </span>Thasneem K A</h1>
            <h5 className='text-muted'>Web Developer</h5>
            <p className='mt-3'>
              I specialize in front-end and back-end development, crafting modern, responsive, and user-focused websites and applications. Combining creativity with technical expertise to deliver seamless digital experiences.
            </p>
            <a href={myCv} download className='btn btn-dark text-light border rounded-pill px-4 py-2 mt-3'>Download CV</a>
            <a href={myCv} target='_blank'  className='btn btn-dark text-light border rounded-pill px-4 py-2 mt-3 ms-3'>View CV</a>

          </div>
          <div className="col-lg-6 text-center">
            <img 
              className='img-fluid rounded-circle shadow-lg mt-4' 
              style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
              src={myPhoto} 
              alt="myPhoto" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
