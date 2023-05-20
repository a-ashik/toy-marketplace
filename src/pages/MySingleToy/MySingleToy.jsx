import React from 'react';
import { Link } from 'react-router-dom';

const MySingleToy = ({data,handleDelate}) => {




    return (
        <div className="col-md-4 my-5  border p-4">
        <div className="carImg ">
            <img className="w-100 h-100 rounded" src={data.image} alt="" />
        </div>
            <h3>Name: {data.name}</h3>
            <p>Price: {data.price} $</p>
            <p>Rating: {data.Rating} star</p>
            <div className="d-flex">
                <button className="btn btn-dark">
                    <Link className="text-decoration-none text-light" to={`/${data._id}`}>View Details</Link>
                </button>
                <button onClick={() => handleDelate(data._id)} className="btn btn-dark ms-2">Delate</button>
            </div>
           
       </div>
    );
};

export default MySingleToy;