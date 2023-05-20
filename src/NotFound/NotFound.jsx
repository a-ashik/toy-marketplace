import React from 'react'; 
import error from '../assets/error.jpg'

const NotFound = () => {
    return (
        <div>
            <div className="w-100 ">
                <img className="w-100 " src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;