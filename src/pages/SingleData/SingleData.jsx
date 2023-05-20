import React, { useEffect } from 'react';
import './SingleData.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleData = ({data}) => {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div data-aos="fade-left" className="col-md-4 my-5 border p-4 ">
           <div className="">
            <div className="carImg">
                <img className="w-100 h-100" src={data.image} alt="" />
            </div>
                <h3>Name: {data.name}</h3>
                <p>Price: {data.price} $</p>
                <p>Rating: {data.Rating} star</p>
                <button className='btn border'>
                    <Link className="text-decoration-none text-dark"  to={`/${data._id}`}>View Details</Link>
                </button>
           </div>
        </div>
        
    );
};

export default SingleData;