import React, { useEffect } from "react";
import AOS from "aos";
import htmlImage from "../assets/html-3.png";
import cssImage from "../assets/css3.jpg";
import jsImage from "../assets/jss.png";
import reactImage from "../assets/reactjs.png";
import nodeImage from "../assets/node.png";
import ExpressImg from "../assets/expr.png";
import MongodbImg from "../assets/mongo.png";
import AngularImg from "../assets/ang.webp";
import '../styles/skills.css'
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5" id="skills">
      <h2 className="text-center mb-5" >My Skills</h2>
      <div className="row justify-content-center">
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
        >
          <img src={htmlImage} alt="HTML" className="img-fluid mb-2 rounded-img" />
        </div>
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={cssImage} alt="CSS" className="img-fluid mb-2 rounded-img" />
          
        </div>
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={jsImage} alt="JavaScript" className="img-fluid mb-2 rounded-img" />
        </div>
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={reactImage} alt="React" className="img-fluid mb-2 rounded-img" />
        </div>
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src={nodeImage} alt="Node.js" className="img-fluid mb-2 rounded-img" />
        </div>
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src={ExpressImg} alt="Express" className="img-fluid mb-2 rounded-img" />
        </div>
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src={MongodbImg} alt="MongoDB" className="img-fluid mb-2 rounded-img" />
        </div>
        <div
          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img src={AngularImg} alt="Angular" className="img-fluid mb-2 rounded-img" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
