import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MySingleToy from '../MySingleToy/MySingleToy';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myData,setMyData] = useState([])

    const email = user?.email
    const url = `http://localhost:5000/cardata?email=${email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyData(data))
    },[])



    const handleDelate = (id) => {
        const ensure = confirm('Are you really want to delete?')
        if(ensure){
            fetch(`http://localhost:5000/cardata/${id}`,{
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                  const  remaingData = myData.filter(data => data._id !== id)
                  setMyData(remaingData)
                }
            })
        }
    }


    return (
        <div>
            <h1 className='text-center'>My added Toy</h1>
            <div className="row mx-auto">
                {
                    myData.map(data => <MySingleToy
                    key={data._id}
                    data={data}
                    handleDelate={handleDelate}
                    >
                    </MySingleToy>)
                }
            </div>
        </div>
    );
};

export default MyToys;