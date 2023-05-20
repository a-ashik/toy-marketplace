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
            <Navbar collapseOnSelect expand="lg" className='my-1'  >
            <Container>
                <Navbar.Brand href="#home" className="">Toy-World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto gap-3">
                    <Link className="text-decoration-none text-dark"  to='/' >Home</Link>
                    <Link className="text-decoration-none text-dark"  to='/alltoys'>All Toys</Link>
                    <Link className="text-decoration-none text-dark"  to='/mytoys'>My Toys</Link>
                    <Link className="text-decoration-none text-dark"  to='/addtoy' >Add A Toy</Link>
                    <Link className="text-decoration-none text-dark"  to='/blog' >Blogs</Link>

                </Nav>
                <Nav>
                    {user ? 
                    <button onClick={handleLogOut}>Logout</button> : 
                    <button><Link className="text-decoration-none text-dark" to='/login'>Login</Link></button>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {/* <hr /> */}
        </div>
    );
};

export default Header;