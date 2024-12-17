import React from 'react';
import Card from 'react-bootstrap/Card';
import weather from '../assets/project1.webp';
import quizapp from '../assets/images (1).jpg'
import tastynest from '../assets/TastyNest.png'
import '../styles/projects.css'
const Projects = () => {
  return (
    <>
      <div className="container" id='projects'>
        <div className="text-center my-5">
          <h2 className="ms-2">Projects</h2>
          <p>Check my favourite projects!</p>
        </div>
        <div className="row justify-content-center gap-3">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="projects shadow h-100">
              <Card.Img variant="top" height={'147px'} src={quizapp} />
              <Card.Body className="text-center">
                <Card.Title>QuizApp</Card.Title>
                <Card.Text>
                  Build using React
                </Card.Text>
                <Card.Link href="https://github.com/Sana-Backer/QuizApp" target='_blank'>GitHub</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="projects shadow h-100">
              <Card.Img variant="top" height={'147px'} src={weather} />
              <Card.Body className="text-center">
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                  Build using React
                </Card.Text>
                <Card.Link ><a href="https://github.com/Sana-Backer/weather-app" target='_blank' >GitHub</a></Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className="projects shadow h-100">
              <Card.Img variant="top" height={'150px'} src={tastynest} />
              <Card.Body className="text-center">
                <Card.Title>Home-bakers App</Card.Title>
                <Card.Text>
                  Build using React, Node.js, Express.js
                </Card.Text>
                <Card.Link href="https://github.com/Sana-Backer/weather-app" target='_blank'>GitHub</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
