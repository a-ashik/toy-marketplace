import React, { useEffect } from 'react'; 
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img5 from '../../assets/img5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {

    useEffect(() => {
        AOS.init();
    },[])


    return (
        <div className="mb-5 text-center">
            <h1 className="text-center text-decoration-underline">OUR PARTNERS</h1>
            <div data-aos="fade-left" className='d-flex justify-content-between mt-4 row mx-auto'>
                <div  className='col-md-3 col-sm-12'>
                    <img src={img} alt="" />
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={img5} alt="" />
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={img2} alt="" />
                </div>
                <div className='col-md-3 col-sm-12'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;