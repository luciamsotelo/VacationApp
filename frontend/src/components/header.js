import React from 'react';
import { Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ showAuthButtons }) => {
  return (
    <div>
    <Navbar className="w-100" style={{backgroundColor: "goldenrod"}}>
      <Container>
        <Row className="w-100">
          <Col className="d-flex align-items-center">
            <Button variant= "outline-light" href="/" className="me-3" style ={{borderColor: "black", color: "#4169e1", fontWeight: "bold", color: "black"}}>Home</Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Navbar.Brand style={{fontSize: "45px", fontWeight: "bold", fontFamily: "calibri", color: "black", textShadow: "2px 2px 10px yellow"}}>Bonded by Adventure</Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end">
              <div className="d-flex align-items-center">
                <Button variant = "outline-light" href="/signUp" className="me-2" style={{borderColor: "#ffd700", color: "#4169e1", fontWeight: "bold", color: "black"}}>Sign Up</Button>
                <Button variant = "outline-light" href="/signUp" className="me-2" style={{borderColor: "#ffd700", color: "#4169e1", fontWeight: "bold", color: "black"}}>Sign In</Button>
              </div>
            
          </Col>
        </Row>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
