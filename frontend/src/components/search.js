import React, { useState } from 'react';
import { Button, Dropdown, Form, FormControl, Card, Row, Col } from 'react-bootstrap';

const FamilyTripLookup = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tripData, setTripData] = useState(null);

  const handleLookupClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchTripData = () => {
    // Simulate fetching data from the database
    const dummyData = {
      familyName: 'Doe Family',
      locationOfTrip: 'Hawaii',
      image: 'https://plus.unsplash.com/premium_photo-1664304932069-42aed0fc4c82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A wonderful trip to Hawaii.',
      rate: '5/5',
      images: [
        'https://plus.unsplash.com/premium_photo-1664304932069-42aed0fc4c82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1507461476191-0ed4f9f18533?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1481464904474-a575a33b44a0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1585537358069-c67a7a471cd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1641496011336-baf26b2d778a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXNyZWFsfGVufDB8fDB8fHww'
      ]
    };
    setTripData(dummyData);
  };

  return (
    <div className="container mt-4">
      <Row className="mb-3">
        <Col>
          <Button variant="primary" onClick={handleLookupClick}>
            Lookup Family Trip
          </Button>
          {showDropdown && (
            <Dropdown.Menu show className="p-3">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Button variant="outline-success" onClick={fetchTripData}>
                  Search
                </Button>
              </Form>
            </Dropdown.Menu>
          )}
        </Col>
        <Col>
          <Button variant="secondary" href="/add">Add Family Trip</Button>
        </Col>
      </Row>
      {tripData && (
        <Card>
          <Card.Img variant="top" src={tripData.image} />
          <Card.Body>
            <Card.Title>{tripData.familyName} - {tripData.locationOfTrip}</Card.Title>
            <Card.Text>
              {tripData.description}
            </Card.Text>
            <Card.Text>
              <strong>Rate:</strong> {tripData.rate}
            </Card.Text>
            <Row>
              {tripData.images.map((img, index) => (
                <Col key={index} xs={12} md={4} className="mb-3">
                  <Card.Img src={img} />
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default FamilyTripLookup;