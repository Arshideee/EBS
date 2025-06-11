import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from "../images/carousel/img4.jpg";
import img3 from "../images/carousel/img52.jpg";
function HomeCarousel() {
  return (
    <div>  <Carousel>
    <Carousel.Item>
    <img className='w-100'  src={img1} alt="" />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
   
    <Carousel.Item>
    <img className='w-100'  src={img3} alt="" />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel></div>
  )
}

export default HomeCarousel