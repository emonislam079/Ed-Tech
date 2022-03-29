import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [Course, setCourse] = useState([])
    useEffect(()=> {
        fetch('./Servicedata.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <Container>
            <h1 className='fw-bold mt-5 text-primary'>Our Best Courses</h1>
      <Row>
      {
            Course.map (course=> <Service
            key={course.id}
            course={course}
            ></Service>)
        }
          
      </Row>
    </Container>
    );
};

export default Services;