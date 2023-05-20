import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import {Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext)


    if(loader) {
        return <Spinner animation="border" variant="dark" />
    }

    if(user?.email){
        return children
    }
    return <Navigate to='/login' replace></Navigate> ;
};

export default PrivateRoute;