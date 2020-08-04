import React from 'react';

import Fade from 'react-reveal/Fade';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import headshot from './savinsav.jpeg';

function About() {
  return (
    <div>
      <Container className="aboutHeader">

      <Fade bottom>
        <Row>
            <Col className="p3" md>
            <Image fluid src={headshot} 
            height="80%"
            width="80%"/>
            </Col>
            <Col md className="about-des">
              <Row><Col className="paragraph-header header"> 
              Hi! I'm Savannah <span role="img" aria-label="wave">👋</span>
              </Col></Row>
              <Row><Col className="paragraph text">I’m a current undergrad at UNC Chapel Hill studying Computer Science and Communication, with plans to graduate in May 2021.
              </Col></Row>
              <Row><Col className="paragraph text">I have industry experience with both software development and design/marketing. 
              It is my belief that thoughtful design is the key to developing meaningful software:
              the two go hand-in-hand. I am most interested in working where these two disciplines align. 
              I seek to design and develop software with the user’s experience in mind. 
              </Col></Row>
            
              <Row><Col className="paragraph text">I am also passionate about using technology for positive social change. 
              At UNC, I am Co-president of <a href="http://uncwics.web.unc.edu/about/" target="_blank" rel="noopener noreferrer">Women in Computer Science</a>, working to make the computer science 
              industry feel inclusive for everyone, and also serve as Events Coordinator for <a href="https://unc-cssg.org/" target="_blank" rel="noopener noreferrer">Computer Science for Social Good</a>, where
              we help out local nonprofits in our community by providing them with our tech skills. 
              </Col></Row>
            </Col>
        </Row>

      </Fade >
      </Container>
    </div>
  );
}

export default About;