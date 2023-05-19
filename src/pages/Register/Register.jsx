import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {registerUser} = useContext(AuthContext)

    const handleRegister = (e)=>{

        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo);

        registerUser(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .then(error => {
            console.log(error);
        })
    }

    return (
        <div className="w-50 mx-auto border p-5 my-5">
            <h1 className="text-center mb-5">Register Here</h1>
                <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Add your Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required/>
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                    <br />
                    <br />
                    <Link to='/login'>CLICK HERE TO LOGIN</Link>
                </Form>
        </div>
    );
};

export default Register;