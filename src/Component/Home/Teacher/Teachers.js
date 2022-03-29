import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Teacher from './Teacher'

const Teachers = () => {
    const [teacher, setTeacher] = useState([]);

    useEffect (()=>{
        fetch ('./FakeData.JSON')
        .then (res =>res.json())
        .then (data => setTeacher (data))
    },[]);
    return (
        <Container>
        <h1 className='fw-bold mt-5 text-primary'>Meet Your Teacher</h1>
  <Row>
  {
        teacher.map (teacher=> <Teacher
        key={teacher.id}
        teacher={teacher}
        ></Teacher>)
    }
      
  </Row>
</Container>
    );
};

export default Teachers;