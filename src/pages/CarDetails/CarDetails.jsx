import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {

    const SingleData = useLoaderData()
    console.log(SingleData);

    return (
        <div>
            <h2>hey i am car details page</h2>
        </div>
    );
};

export default CarDetails;