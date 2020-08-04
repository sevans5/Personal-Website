import React from 'react';

import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import vibecheck from './projects/img/Vibecheckcover.png';
import myWeather from './projects/img/MyWeathercover.png'
import ncf4k from './projects/img/NCF4NCKcover.png';
import moviefinder from './projects/img/MovieFinderCover.png';
import librarier from './projects/img/Librariercover.png'

class Projects extends React.Component {
  render() {
  return (
    <MDBContainer className="header mt-5 proj">
    <Fade bottom>
      <MDBRow>
        <MDBCol className="h4 text-center p-3">
            code
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="4" className="p-2">
          <Link to = "./vibecheck">
          <MDBView hover>
            <img
              src={vibecheck }
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="black-text">Vibe Check</p>
            </MDBMask>
          </MDBView>
          </Link>
        </MDBCol>
        <MDBCol md="4" className="p-2">
          <Link to="./myweather">
          <MDBView hover>
            <img
              src={myWeather}
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="black-text">My Weather</p>
            </MDBMask>
          </MDBView>
          </Link>
        </MDBCol>
        <MDBCol md="4" className="p-2">
          <Link to = "./NCFarmsForNCKids">
          <MDBView hover>
            <img
              src= { ncf4k }
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="black-text">NC Farms for NC Kids</p>
            </MDBMask>
          </MDBView>
          </Link>
        </MDBCol>
     
      </MDBRow>
      <MDBRow>
        <MDBCol className="h4 text-center p-3">
          design
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="4" className="p-2">
        <Link to = "./moviefinder">
          <MDBView hover>
            <img
              src={moviefinder}
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="black-text">Movie Finder</p>
            </MDBMask>
          </MDBView>
          </Link>
        </MDBCol>
        <MDBCol md="4" className="p-2">
        <Link to = "./librarier">
          <MDBView hover>
            <img
              src={librarier}              
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="white-strong">
              <p className="black-text">Librarier</p>
            </MDBMask>
          </MDBView>
          </Link>
        </MDBCol>
      </MDBRow>
      </Fade >
  </MDBContainer>
    );
  }
    
}


export default Projects;