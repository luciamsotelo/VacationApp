import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    familyName: '',
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
    <div className="d-flex justify-content-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564613469739-c78f970f9c17?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
    <Container className="mt-5" style={{color: "white", borderRadius: "10px", padding: "50px 1px 50px 1px", marginBottom: "75px", border: "2px solid palegoldenrod"}}>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1>Family Registration</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </Form.Group>

            <Form.Group controlId="formFamilyName">
              <Form.Label>Family Name</Form.Label>
              <Form.Control
                type="text"
                name="familyName"
                value={formData.familyName}
                onChange={handleChange}
                placeholder="Enter your family name"
              />
            </Form.Group>

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

            <Button variant="secondary" style= {{marginTop : "20px"}} type="submit" href='/signIn'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default UserForm;
