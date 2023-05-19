import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {

    const SingleData = useLoaderData()
    const {name, description,price,image,sellerName,Rating} = SingleData;
    console.log(SingleData);

    return (
        <div className="">
            <div className="d-flex justify-content-between  row">
                <div className="w-50 h-50 col-md-4">
                    <img className="w-100 h-100" src={image} alt="" />
                </div>
                <div className="mt-5 col-md-4">
                    <h2>Details</h2>
                    <hr />
                    <h3>Name: {name}</h3>
                    <p>Seller Name: {sellerName}</p>
                    <p>price: {price} $</p>
                    <p>Rating: {Rating} star</p>
                    <p>price: {price}</p>
                    <p>Description: {description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;