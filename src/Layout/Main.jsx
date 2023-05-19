import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Header/Header';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;