import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="w-100 h-75">
            <img className="w-100 h-100" src={banner} alt="" />
        </div>
    );
};

export default Banner;