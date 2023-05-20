import React from 'react';
import banner1 from '../../assets/banner5.jpeg'
import banner2 from '../../assets/ca2.jpg'
import banner3 from '../../assets/banner6.jpeg'
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
     <div className="">

        <Carousel className='cHeight'>
                <Carousel.Item className='cHeight'>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide car</h3>
                    <p>A model car, or toy car, is a miniature representation of an automobile</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='cHeight'>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide car</h3>
                    <p>A model car, or toy car, is a miniature representation of an automobile</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='cHeight'>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide car</h3>
                    <p>
                        A model car, or toy car, is a miniature representation of an automobile
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        
        {/* <div className="w-100 h-75">
            <img className="w-100 h-100" src={banner} alt="" />
        </div> */}
     </div>
    );
};

export default Banner;