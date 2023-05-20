import React, { useEffect } from 'react'; 
import about from '../../assets/photo1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div className="mb-5 container">
            <h1 className='text-center text-decoration-underline'>About Us</h1>
            <div data-aos="fade-left" className="d-flex justify-content-around row">
                <div className="col-md-4 col-sm-12 w-50 h-50">
                    <img className="w-100 h-100 rounded-4" src={about} alt="" />
                </div>
                <div className="col-md-4 col-sm-12  mt-5">
                    <h1 className="mt-5">About Toy World</h1>
                    <p>A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category. Because many miniature vehicles were originally aimed at children as playthings</p>
                    <button class="btn btn-dark">Button</button>
                </div>
            </div>
        </div>
    );
};

export default About;