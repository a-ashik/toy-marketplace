import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../provider/AuthProvider';


const AddToy = () => {

    const {user}= useContext(AuthContext)

    const handleAddToy = (e) =>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const photo = form.photo.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

    }

    return (
        <div>
            <h1 className='text-center'>Add Toy</h1>
            <div className='my-5 w-50 mx-auto border p-5'>
            <Form onSubmit={handleAddToy}>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control name="photo" type="text" placeholder="Picture URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" defaultValue={user?.displayName} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" defaultValue={user?.email} type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubcategory ">
                    <Form.Label>Sub category </Form.Label>
                    <Form.Control name="subCategory " type="text" placeholder="Sub category " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice ">
                    <Form.Label>Price </Form.Label>
                    <Form.Control name="price " type="text" placeholder="Enter Price " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicquantity">
                    <Form.Label>Available quantity </Form.Label>
                    <Form.Control name="quantity " type="text" placeholder="Enter quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicdescription">
                    <Form.Label>Detail description</Form.Label>
                    <Form.Control name="description " type="text" placeholder="Enter description" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddToy;