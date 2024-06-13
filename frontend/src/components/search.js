import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const FamilyTripComponent = () => {
  const [showSearch, setShowSearch] = useState(true); // Initially show the search interface
  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  const handleSearch = () => {
    // Simulated search results, replace with actual search logic
    const results = [
      'https://images.unsplash.com/photo-1465306417166-e11002b6eb25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1465306417166-e11002b6eb25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1465306417166-e11002b6eb25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
    setSearchResults(results);
    setShowSearch(false); // Hide the search interface after searching
  };

  const handleAddClick = () => {
    // Handle logic for adding a family trip
    console.log('Add Family Trip clicked');
  };

  const handleNewSearch = () => {
    setShowSearch(true); // Show search interface again for new search
    setSearchResults([]); // Clear previous search results
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          {showSearch ? (
            <div>
              <h1>Search Family Trip</h1>
              <Form>
                <Form.Group controlId="formTripSearch">
                  <Form.Label>Search for Family Trip</Form.Label>
                  <Form.Control type="text" placeholder="Enter trip code..." />
                </Form.Group>
                <Button variant="primary" onClick={handleSearch}>
                  Search
                </Button>
                <Button variant="secondary" onClick={handleAddClick} href="/add">
                  Add Family Trip
                </Button>
              </Form>
            </div>
          ) : (
            <div>
              <Button variant="link" onClick={handleNewSearch}>
                New Search
              </Button>
              <hr />
              <h2>Search Results</h2>
              <Row>
                {searchResults.map((imageUrl, index) => (
                  <Col key={index} xs={6} md={4} className="mb-4">
                    <img
                      src={imageUrl}
                      alt={`Search result ${index}`}
                      className="img-fluid rounded"
                      style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FamilyTripComponent;
