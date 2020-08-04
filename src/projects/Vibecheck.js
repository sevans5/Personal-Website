import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

import vc1 from './img/vc1.png';
import vc2 from './img/vc2.png';
import vc3 from './img/vc3.png';

function Vibecheck() {
  return (
    <div>
    
    <Container>
    <Fade bottom>
      <Row>
        <Col className="title header"> <h1>Vibe Check</h1></Col>
      </Row>

      <Row>
        <Col className="des text"> <p>
        Created to find a crowdsourced solution to media biases, Vibe Check 
        is an interactive website that allows users to vote on what they 
        perceive a specific news article's bias is, and then view stats 
        on what other users thought about the same article. Each day random 
        articles are generated and provided for users to vote on. There is 
        also a search capability for users to see how certain demographics 
        felt about past articles. 
        </p></Col>
      </Row>

      <Container className="project-details text">
        <Row className="text">
          <Col> <p><strong>Technologies Used:</strong><br/> JavaScript, JQuery, HTML/CSS, Bootstrap, Firebase, News API</p></Col>
        </Row>

        <Row className="buttons text">
          <Col>
          <a href="https://vibecheckk.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline-dark" className="button">View Live Website</Button>
          </a>
          <a href="https://github.com/rende99/vibeCheck" target="_blank" rel="noopener noreferrer">
            <Button variant="outline-dark" className="button">View Code Repo</Button>
          </a>
          </Col>
        </Row>
       
      </Container>
      </Fade>
      
      <Fade bottom>
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={vc1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vc2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={vc3}
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
            
            <Link to="./vibecheck" className="active">
              <span>  Vibe Check   </span> 
            </Link>
           
            <span>/</span> 
            
            <Link to="./myweather">
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

export default Vibecheck;