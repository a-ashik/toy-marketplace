import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleAllData from '../SingleAllData/SingleAllData';

const AllToys = () => {

    const [allData,setAllData] = useState([])

    useEffect(() => {
        fetch('https://toy-server-zeta.vercel.app/cardata')
        .then((response) =>response.json())
        .then(data =>setAllData(data))
    },[])

    console.log(allData);

    return (
        <div className='container'>
            <div className=" row mx-auto">
                <h1 className='text-center text-decoration-underline my-4'>All Toys</h1>
                {
                    allData.map(data => <SingleAllData
                    key={data._id}
                    data={data}
                    >
                    </SingleAllData>)
                }
                 </div>
        </div>
    );
};

export default AllToys;