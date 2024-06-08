import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/05/77/81/37/360_F_577813765_Lh8cmY7LoYoJNb8PMls6BhdjXMzsf5Dn.jpg"
          alt="Hawaii Beach"
        />
        <Carousel.Caption>
          <h5>Hawaii</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/626bc4e40ab65c7c09f67524/1673131605632-2Y6TEHANNGFNJJGQ6P8G/shutterstock_720033034+crop.jpg"
          alt="Tucson Arizona"
        />
        <Carousel.Caption>
          <h5>Arizona</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://content.api.news/v3/images/bin/f82dfbbabbe5522db96a14d65e91c2e6"
          alt="Italy"
        />
        <Carousel.Caption>
          <h5>Italy</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
