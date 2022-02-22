import React from 'react';

import '../../Style/FCarousel.css'

import { Carousel } from 'react-bootstrap';

const FCarousel = () => {
    return (
        <React.Fragment>
            <Carousel className='carousel' >
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100"
                        src="https://rukminim1.flixcart.com/flap/3376/560/image/f29b9f38ab28403b.jpg?q=50"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://rukminim1.flixcart.com/flap/3376/560/image/c4577f070c07351b.jpg?q=50"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://rukminim1.flixcart.com/flap/3376/560/image/e74d64ff558cbede.jpeg?q=50"
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </React.Fragment>
    );
};

export default FCarousel;
