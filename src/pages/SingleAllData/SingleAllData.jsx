import React from 'react';
import { Link } from 'react-router-dom';

const SingleAllData = ({data}) => {
    return (
        <div className=" col-md-4 p-5">
           <div className="">
                <h5>Seller Name: {data.sellerName}</h5>
                <p>Toy Name: {data.name}</p>
                <p>Sub category: {data.subcategory}</p>
                <p>Price: {data.price} $</p>
                <p>Available Quantity: {data.quantity}</p>
                <button className='btn border'>
                    <Link className="text-decoration-none text-dark"  to={`/${data._id}`}>View Details</Link>
                </button>
           </div>
        </div>
    );
};

export default SingleAllData;