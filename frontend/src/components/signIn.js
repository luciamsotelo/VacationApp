import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="d-flex justify-content-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594179594534-9d826c107c10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '75vh'}}>
    <Container className="mt-5" style={{color: "white", borderRadius: "10px", paddingTop: "50px", marginBottom: "30px", border: "2px solid palegoldenrod"}}>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="outline-light" style={{color: "black", fontWeight: "bold", marginTop: "20px"}} type="submit" href="/search">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default SignInForm;
