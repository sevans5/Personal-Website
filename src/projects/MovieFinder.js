import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import moviefinderlow from './img/moviefinderlow.png';
import moviefindermid from './img/moviefindermid.png';
import moviefinderfinal1 from './img/moviefinderfinal1.png';
import moviefinderfinal2 from './img/moviefinderfinal2.png';
import moviefinderfinal3 from './img/moviefinderfinal3.png';


function MovieFinder() {
  return (
    <div>
      <Container>
      <Fade bottom>
      <Row>
        <Col className="title header"> <h1>Movie Finder</h1></Col>
      </Row>

      <Row>
        <Col className="des text"> <p>After my own personal experience of finding it 
          difficult to decide on a movie to watch, the concept of Movie Finder 
          was ideated: a mobile application that makes it simple and fun to decide 
          on a movie to watch. Users can search for a movie, or can receive randomized 
          options based on the genre they desire, or the streaming platform they 
          subscribe to. They can add movies to their queue for later viewing, and 
          also see user reviews on each individual film.
            </p></Col>
      </Row>

      <Row>
        <Col className="text"> <p><strong>Skills used:</strong><br/> Design thinking, Iterative Design, Agile and Lean Methodologies, User Research, Low Fidelity, Mid Fidelity, and High Fidelity Wireframes, Prototyping with Adobe XD </p></Col>
      </Row>

      <Row className="buttons text">
        <Col>
        <a href="https://xd.adobe.com/view/31320f36-e76a-456f-6034-9a73b1dccf42-4703/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-dark" className="button">View Live Demo</Button>
        </a>
        <a href="files/Movie Finder UX Case Study.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-dark" className="button">View Full UX Case Study</Button>
        </a>
        </Col>
        </Row>
      
        <Container className="ux-content text">
          <Row >
            <Col className="ux-item"><h4 class="text-left"><strong>The Question</strong> </h4>
            <div class="text-left">How can I simplify the way a user finds a movie on a specific streaming platform?</div>
             </Col>
          </Row>

          <Row >
            <Col className="ux-item" class="text-left"><h4 class="text-left"><strong>UX Strategy</strong> </h4>
            <div class="text-left"> The purpose of this app is to take away the stressful decision making process that arises when it comes
            time to watch a movie on a streaming platform. During my field research it became evident that, of people
            who actively use streaming platforms, all have experienced feelings of indecisiveness when selecting
            from the wide array of options available to them. When there are too many equally ranked choices, it
            becomes difficult to weigh one against the other and decide which is better. This is a phenomenon known
            as choice paralysis, which occurs when the options at hand are all too similar to make a clear distinction
            </div>
             </Col>
          </Row>

          
          <Row>
            <Col className="ux-item" text><h4 class="text-left"><strong>Wireframes</strong></h4></Col>
              <Row><Col md>
              <Image fluid src={moviefinderlow} />
              </Col><Col md>
              <Image fluid src={moviefindermid}/>
             </Col></Row> 
             <Row className="ux-item"><Col md>
              <Image fluid src={moviefinderfinal2} 
              height="75%"
              width="75%"/>
              </Col><Col md>
              <Image fluid src={moviefinderfinal1}
               height="75%"
               width="75%"/>
             </Col>
             <Col md>
              <Image fluid src={moviefinderfinal3}
               height="75%"
               width="75%"/>
             </Col></Row> 
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
           
              <Link to="./moviefinder" className="active">
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

export default MovieFinder;