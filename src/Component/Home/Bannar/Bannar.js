import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Bannar.css'
const Bannar = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/h9sgy3S/slide1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4><i className="fas fa-book-open me-3"></i>WE ARE BEST<i className="fas fa-book-open ms-3"></i></h4>
                        <h3>LET YOUR CHILD <span className='text-success'>GROW</span></h3>
                        <p className='text-center'>We here at EdTech provides best education to your little one</p>
                        <Button variant="outline-info"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fNhdc8w/slide2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4><i className="fas fa-book-open me-3"></i>WE ARE BEST<i className="fas fa-book-open ms-3"></i></h4>
                        <h3>CHOOSE <span className='text-success'>BEST</span> FOR YOUR CHILD </h3>
                        <p className='text-center'>We here at EdTech provides best education to your little one</p>
                        <Button variant="outline-info"> <i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Jr0tfVY/slide3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4><i className="fas fa-book-open me-3"></i>WE ARE BEST<i className="fas fa-book-open ms-3"></i></h4>
                        <h3>GIVE <span className='text-success'>BOOST</span> TO YOUR CHILD</h3>
                        <p className='text-center'>We here at EdTech provides best education to your little one</p>
                        <Button variant="outline-info"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Bannar;