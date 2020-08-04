import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';
import ncffk1 from './img/ncffk1.png';
import ncffk2 from './img/ncffk2.png';
import ncffk3 from './img/ncffk3.png';

function NCFarmsForNCKids() {
  return (
    <div>
    <Container>
    <Fade bottom>
      <Row>
        <Col className="title header"> <h1>NC Farms for NC Kids Website</h1></Col>
      </Row>

      <Row className="text">
        <Col className="des"> <p>The NC Farms for NC Kids coalition within 
          the North Carolina Parent Teacher Association works to provide 
          public school cafeterias with fresh, local produce. This non-profit 
          organization promotes the inclusion of North Carolina grown foods 
          in cafeteria meals for public school children, as well as aims to 
          provide flexibility for children who may be unable to pay for school 
          meals. I had the privilege to work with this team to create a website 
          that would serve as a hub for resources and information about the coalition. 
          This is a complete redesign from their initial site.</p></Col>
      </Row>

      <Row className="text">
        <Col className=""> <p><strong>Technologies Used:</strong><br/> HTML/CSS, Bootstrap, Web Hosting with Netlify</p></Col>
      </Row>

      <Row className="buttons text">
        <Col>
        <a href="https://www.ncfarmsfornckids.com/index.html" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-dark" className="button text">View Live Website</Button>
        </a>
        <a href="https://github.com/ncfarms4kids/ncfarms4kids-website" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-dark" className="button text">View Code Repo</Button>
        </a>
        </Col>
      </Row>
      </Fade >
      <Fade bottom>
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={ncffk1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ncffk2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ncffk3}
          alt="Third slide"
        />
      </Carousel.Item>
  </Carousel>
  </Fade >

  <Container className="footer-links header">
        <Row>
            
             <Col>
             <Link to="./projects">
             <span>  All projects   </span> 
              </Link>

              <span>/</span> 
            
            <Link to="./vibecheck" >
              <span>  Vibe Check   </span> 
            </Link>
           
            <span>/</span> 
            
            <Link to="./myweather">
              <span>  My Weather   </span> 
            </Link>
           
            <span>/</span> 
            
            <Link to="./NCFarmsforNCKids" className="active">
           
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
  </Container>



    </div>
  );
}

export default NCFarmsForNCKids;