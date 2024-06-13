import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AddFamilyTrip = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    participants: '',
    rating: 0,
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      images: [...formData.images, ...Array.from(e.target.files)]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1>Add Family Trip</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTripTitle">
              <Form.Label>Where did you go code?</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter trip title"
              />
            </Form.Group>

            <Form.Group controlId="formTripDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter trip description"
              />
            </Form.Group>

            <Form.Group controlId="formTripDate">
              <Form.Label>Date of Trip</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTripParticipants">
              <Form.Label>Family Name</Form.Label>
              <Form.Control
                type="text"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                placeholder="Enter participants"
              />
            </Form.Group>

            <Form.Group controlId="formTripRating">
              <Form.Label>Rate the Trip</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rate from 1 to 5"
                min="1"
                max="5"
              />
            </Form.Group>

            <Form.Group controlId="formTripImages">
              <Form.Label>Upload Images</Form.Label>
              <Form.Control
                type="file"
                name="images"
                multiple
                onChange={handleImageChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Trip
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddFamilyTrip;
