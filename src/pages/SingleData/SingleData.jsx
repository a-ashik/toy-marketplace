import React from 'react';
import './SingleData.css'
import { Link } from 'react-router-dom';

const SingleData = ({data}) => {

    return (
        <div className="col-md-4 my-5 border p-4 ">
           <div className="">
            <div className="carImg">
                <img className="w-100 h-100" src={data.image} alt="" />
            </div>
                <h3>Name: {data.name}</h3>
                <p>Price: {data.price}</p>
                <p>Rating: {data.Rating} star</p>
                <button className='btn border'>
                    <Link to={`/${data._id}`}>View Details</Link>
                </button>
           </div>
        </div>
        
    );
};

export default SingleData;