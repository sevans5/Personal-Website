import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

import myWeather1 from './img/MyWeather1.png'
import myWeather2 from './img/MyWeather2.png'
import myWeather3 from './img/MyWeather3.png'
import myWeather4 from './img/MyWeather4.png'

function MyWeather() {
  
  return (
    <div>
    <Container>
    <Fade bottom>
      <Row>
        <Col className="title header"> <h1>My Weather</h1></Col>
      </Row>

      <Row>
        <Col className="des text"> <p>A simple dashboard application that 
          allows the user to select their preferred cities, and displays 
          the current temperature and weather conditions, as well as the high and low for the day. 
          The application can detect when a city has already been added to 
          the dashboard, as well as when an inputted city is spelled incorrectly. </p></Col>
      </Row>

      <Row className="text">
        <Col> <p><strong>Technologies Used:</strong><br/> React.js, Node.js, Express.js, OpenWeather API, React Bootstrap, Deploying to Heroku</p></Col>
      </Row>

      <Row className="buttons text">
        <Col>
        <a href="https://my-weather-2020.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-dark" className="button">View Live Website</Button>
        </a>
        <a href="https://github.com/sevans5/My-Weather" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-dark" className="button">View Code Repo</Button>
        </a>
        </Col>
      </Row>

      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={myWeather1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myWeather2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myWeather4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myWeather3}
          alt="Third slide"
        />
      </Carousel.Item>
  </Carousel>
  </Fade >
  </Container>

  <Container className="footer-links header">
        <Row>
            
             <Col>
             <Link to="./projects">
             <span>  All projects   </span> 
              </Link>

              <span>/</span> 
            
            <Link to="./vibecheck">
              <span>  Vibe Check   </span> 
            </Link>
           
            <span>/</span> 
            
            <Link to="./myweather" className="active">
              <span>  My Weather   </span> 
            </Link>
           
            <span>/</span> 
            
            <Link to="./NCFarmsforNCKids">
           
             <span>  NC Farms for NC Kids   </span> 
           
            </Link>
           
            <span>/</span> 
           
              <Link to="./moviefinder">
               <span>  Movie Finder   </span>
              </Link>

              <span>/</span> 
           
            <Link to="./librarier">
              <span>  Librarier </span>
            </Link>
            </Col>
        
        </Row>

      </Container>

    </div>
  );
}

export default MyWeather;