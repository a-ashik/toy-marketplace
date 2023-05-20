import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)

    const email = user?.email
    const url = `http://localhost:5000/cardata?email=${email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])


    return (
        <div>
            <h1>This is myToys page</h1>
        </div>
    );
};

export default MyToys;