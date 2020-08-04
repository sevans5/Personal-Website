import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <div>
      <Container className="footer"> 
        <Row className="connect-items">
            <Col>
            <a href="https://www.linkedin.com/in/savannah--evans/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin fa-2x icon icon-link" aria-hidden="true"></i></a>
            <a href="https://github.com/sevans5" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa-2x icon icon-link" aria-hidden="true"></i></a>
            <a href="mailto:sevans5@live.unc.edu"><i class="fa fa-envelope fa-2x icon-link" aria-hidden="true"></i></a>
            </Col>
        </Row>
        <Row className="copyright text">
            <Col>
              <p>coded with <span role="img" aria-label="heart">❤️</span> by savannah evans</p>
            </Col>
        </Row>
      </Container>
  
    </div>
  );
}

export default Footer;