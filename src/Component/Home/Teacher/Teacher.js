import React from 'react';
import './Teacher.css'

const Teacher = ({teacher}) => {
    const{subject,name,img}= teacher;

    return (

        <div className='col-md-4 teacher-card mb-4'>
            <div className='d-flex flex-column text-left mb-4 card h-100 p-3'>
                <div className='d-flex align-items-center mb-2'>

                    <img
                        style={{ width: '20%' }}
                        className='mr-2 rounded-circle'
                        src={img}
                        alt=''
                    />


                    <div className="ms-2">
                        <h5>{name}</h5>
                        <small>{subject}</small>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Teacher;