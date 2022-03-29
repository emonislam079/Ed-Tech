import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Service.css'

const Service = ({course}) => {
    AOS.init();
    return (
        <Col xs={12} md={12} className="Blogs-box p-3">
            <Row>
              <Col xs={12} md={8} className="Blogs-text ps-4">
                <div>
                  <h1 className='text-start'>{course.name}</h1>
                  <h3 className="text-secondary"> Fee: {course.cost} /-</h3>
                <hr />
                <p>{course.details}</p>
                <h4 className='text-start'>Rating :  
                <Rating 
                className='text-success'
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
                initialRating='5'/></h4>
                <Link to ={'/payment'}> <Button>Buy Now {course.cost}</Button> </Link>
                </div>
                
              </Col>
              <Col
                xs={12}
                md={4}>
                <img data-aos="zoom-in" data-aos-duration="3000" src={course.img} alt="" />
              </Col>
              
            </Row>
          </Col>
    );
};

export default Service;