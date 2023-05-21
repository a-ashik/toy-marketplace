import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5 mx-auto'>
            <h1 className='text-center my-4 text-decoration-underline'>Blog</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Header>
                    <Accordion.Body>
                    Answer: Access token is Short-lived credential for accessing specific resources,Refresh token: Long-lived credential used to obtain a new access token,We Store them in local storage and cookie .
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Compare SQL and NoSQL databases?</Accordion.Header>
                    <Accordion.Body>
                    Answer: SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems. Differance is making them suitable for complex relationships and structured data.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is express js? What is Nest JS?</Accordion.Header>
                    <Accordion.Body>
                    Answer: Express.js is a minimalist and flexible web application framework for Node.js and Nest.js is a progressive and opinionated framework that helps build Node.JS server-side applications. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is MongoDB aggregate and how does it work?</Accordion.Header>
                    <Accordion.Body>
                   Answer: In MongoDB, the aggregate function is a powerful tool used for data aggregation and processing. It allows you to perform complex operations on documents within a collection and retrieve aggregated results.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </div>
    );
};

export default Blog;