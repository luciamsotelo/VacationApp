import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ showAuthButtons }) => {
  return (
    <Navbar bg="light" className="w-100">
      <Container>
        <Row className="w-100">
          <Col className="d-flex align-items-center">
            <Button variant="outline-info" href="#" className="me-3">Home</Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Navbar.Brand>Bonded by Adventure</Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end">
              <div>
                <Button variant="outline-warning" className="me-2">Sign Up</Button>
                <Button variant="warning">Sign In</Button>
              </div>
            
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
