import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { user,logOut} = useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then()
        .then(error=>{
            console.log(error);
        })
    }
 

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='my-2'  >
            <Container>
                <Navbar.Brand href="#home">Toy-World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto gap-3">
                    <Link to='/' >Home</Link>
                    <Link to='/alltoys'>All Toys</Link>
                    <Link to='/mytoys'>My Toys</Link>
                    <Link to='/addtoy' >Add A Toy</Link>
                    <Link to='/blog' >Blogs</Link>

                </Nav>
                <Nav>
                    {user ? 
                    <button onClick={handleLogOut}>Logout</button> : 
                    <Link to='/login'>Login</Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <hr />
        </div>
    );
};

export default Header;