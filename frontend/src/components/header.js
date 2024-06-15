import React from 'react';
import { Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ showAuthButtons }) => {
  return (
    
    <Navbar className="w-100" style={{backgroundColor: "#fff077"}}>
      <Container>
        <Row className="w-100">
          {/* <Col className="d-flex align-items-center">
            <Button variant= "outline-light" href="/" className="me-3" style ={{borderColor: "black", color: "#4169e1", fontWeight: "bold", color: "black"}}>Home</Button>
          </Col> */}
          <Col className="d-flex justify-content-center">
            <Navbar.Brand style={{fontSize: "36px", fontWeight: "bold", fontFamily: "calibri", color: "black", textShadow: "2px 2px 10px babyblue"}}>
            <a href="/">
            <img src="/images/logo2.png" alt="Logo" style={{height: '100px', marginRight: '10px', borderRadius: '50%'}} />
            </a>
              Bonded by Adventure</Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end">
              <div className="d-flex align-items-center">
                <Button variant = "outline-light" href="/signUp" className="me-2" style={{borderColor: "#ffd700", color: "#4169e1", fontWeight: "bold", color: "black"}}>Sign Up</Button>
                <Button variant = "outline-light" href="/signIn" className="me-2" style={{borderColor: "#ffd700", color: "#4169e1", fontWeight: "bold", color: "black"}}>Sign In</Button>
              </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
    
  );
};

export default Header;
