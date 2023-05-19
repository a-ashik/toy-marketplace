import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const {login,googleSignIn} = useContext(AuthContext)


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        login(email, password)
        .then((result) => {
            const user = result.user
            console.log(user);
        })
        .then(error => {
            console.log(error);
        })
    }


    const handleGoogleLogIn = () => {
        googleSignIn()
        .then()
    }


    return (
        <div className="w-50 mx-auto my-5 border p-5">
            <h1 className="text-center my-3">Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            <button class="btn btn-dark mt-2"onClick={handleGoogleLogIn} >Google SignIn</button>
            <p className="mt-3">If don't have an account</p>
            <Link to="/register">REGISTER HERE</Link>
        </div>
    );
};

export default Login;