import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SingleData from '../SingleData/SingleData';
import About from '../About/About';
import Partners from '../Partners/Partners';

const Home = () => {

    const [toyData,setToyData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cardata')
        .then(response => response.json())
        .then(data => setToyData(data))

    },[])
    
    return (
        <div>
            <Banner></Banner>
            <div className='row container mx-auto'>
                <h1 className='mt-5 text-center text-decoration-underline'>Cars List</h1>
                {
                    toyData.map(data =>
                    <SingleData
                    key={data._id}
                    data = {data}
                    ></SingleData>
                    )
                }
            </div>
            <About></About>
            <Partners></Partners>

        </div>
    );
};

export default Home;