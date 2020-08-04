import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import userFlow from './img/user flow.png';
import uxRe1 from './img/user research 1.png';
import uxRe2 from './img/user research 2.png';
import journeyMap from './img/journey map.png';
import LibrarierMid from './img/LibrarierMid.png';
import LibrarierHomepage from './img/LibrarierHomepage.png';
import LibHighFid1 from './img/LibHighFid1.png';
import LibHighFid2 from './img/LibHighFid2.png';

function Librarier() {
  return (
    <div>
      <Container>
      <Fade bottom>
      <Row>
        <Col className="title header"> <h1>Librarier</h1></Col>
      </Row>

      <Row>
        <Col className="des text"> <p>Throughout the COVID-19 Pandemic, reading 
          has been a popular choice for a stay-at-home activity. Oftentimes 
          books are purchased and only read once, left to collect dust on the 
          owner’s bookcase. In an effort to reduce the waste associated with 
          buying brand new books, as well as reinvigorate local public libraries, 
          the concept of Librarier was ideated. The intention is that users can 
          select the book(s) they wish to rent from an online portal, and then 
          the book will be delivered to their house. When the user is done with 
          their rentals, they can schedule a pick-up and have the books collected 
          from their front doorstep.
    </p></Col>
      </Row>

        <Container className="info-content text">
          <Row>
            <Col xs> <p><strong>Skills Used:</strong> <br/>Design Thinking, User research, Personas, Journey Mapping, Mid Fidelity and High Fidelity Wireframes, UI Design, Prototyping with Adobe XD </p></Col>
          </Row>

          <Row className="buttons text">
            <Col>
            <a href="https://xd.adobe.com/view/c97d5959-e5b4-450b-4969-dd3c491b2c71-bf4c/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-dark" className="button">View Live Demo</Button>
            </a>
            <a href="files/LibrarierPitchDeck.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-dark" className="button">View Full UX Case Study</Button>
            </a>
            </Col>
            </Row>
        </Container> 

        <Container className="ux-content text">
          <Row>
            <Col className="question"><h4 class="text-left"><strong>The Question</strong> </h4>
            <div class="text-left">How can we provide communities with access to physical books from their local public library during a global pandemic?</div>
            </Col>
          </Row>
          <Row>
            <Col className="ux-item">
              <Row><Col><h4 class="text-left"><strong>User Research </strong></h4></Col></Row>
              <Row><Col><div class="text-left">As seen below, we discovered in our user research that not only were people
                reading now more than ever, they were also less likely to want to purchase books for themselves
                and more inclined to rent from their local public libraries. As we sought to understand the 
                reasons for these research results, it allowed us to empathize with the users, and design a solution that could fit all of their individual needs.</div></Col></Row>
              <Row><Col className="ux-item" md>
                  <Image fluid src={uxRe1} />
              </Col><Col className="ux-item" md> 
                  <Image fluid src={uxRe2}/>
              </Col></Row> 
            </Col>
          </Row>
          <Row>
            <Col className="ux-item">
            <Row><Col><h4 class="text-left"><strong>User Flow and Journey Map </strong></h4></Col></Row>
            <Row><Col><div class="text-left">Our primary goal was to allow for many different ways to arrive 
            at the same page or resource. This allows for increased accessibility, regardless of the user's
            comfortability level with using online portals. </div></Col></Row>
            <Row><Col className="ux-item" md>
            <Image fluid src={userFlow} />
            </Col><Col className="ux-item" md>
            <Image fluid src={journeyMap}/>
            </Col></Row> 
            </Col>
          </Row>


          <Row>
            <Col className="ux-item">
            <Row><Col ><h4 class="text-left"><strong>Wireframes </strong></h4></Col></Row>
            <Row><Col><div class="text-left">Below you can find some wireframes created for the project.  </div></Col></Row>
              <Row><Col className="ux-item" md>
              <Image fluid src={LibrarierMid} />
              </Col><Col className="ux-item" md>
              <Image fluid src={LibrarierHomepage}/>
             </Col></Row> 
             <Row className="ux-item"><Col className="ux-item" md>
              <Image fluid src={LibHighFid1} />
              </Col><Col className="ux-item" md>
              <Image fluid src={LibHighFid2}/>
             </Col></Row> 
             </Col>
          </Row>
        </Container>
        </Fade >
      </Container>

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
            
            <Link to="./NCFarmsforNCKids">
           
             <span>  NC Farms for NC Kids   </span> 
           
            </Link>
           
            <span>/</span> 
           
              <Link to="./moviefinder">
               <span>  Movie Finder   </span>
              </Link>

              <span>/</span> 
           
            <Link to="./librarier" className="active">
              <span>  Librarier </span>
            </Link>
            </Col>
        
        </Row>

      </Container>
    </div>
  );
}

export default Librarier;
