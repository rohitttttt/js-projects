import React, { Component } from 'react';
import la from '../crousal/la.jpg';
import chicago from '../crousal/chicago.jpg';
import ny from '../crousal/ny.jpg';
import '../site.css';
import Carousel from 'react-bootstrap/Carousel'

export default class Crousal extends Component {
    render()
    {
        return(
            <div>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={chicago}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ny}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={la}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        )
    }
}
