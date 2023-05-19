import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SingleData from '../SingleData/SingleData';

const Home = () => {

    const [toyData,setToyData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cardata')
        .then(response => response.json())
        .then(data => setToyData(data))

    },[])

    console.log(toyData);

    return (
        <div>
            <Banner></Banner>
            <div className='row container '>
                <h1 className='mt-5 text-center'>Cars List</h1>
                {
                    toyData.map(data =>
                    <SingleData
                    key={data._id}
                    data = {data}
                    ></SingleData>
                    )
                }
            </div>
        </div>
    );
};

export default Home;