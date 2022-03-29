import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SliceService from './SliceService';

const SliceServices = () => {
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
            Course.slice(0,4).map (course=> <SliceService
            key={course.id}
            course={course}
            ></SliceService>)
        }
          
          <Link to = {'/service'}> <Button className='w-25 mx-auto mb-5'>See More ..</Button></Link>
      </Row>
    </Container>
    );
};

export default SliceServices;