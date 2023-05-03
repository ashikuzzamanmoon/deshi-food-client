import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { AuthContext } from '../../components/Authentication/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='d-flex'>
                    <Navbar.Brand href="/" className='fw-bold fs-4'>Deshi Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>

                            {
                                user && <img src={user?.photoURL} width={'30px'} className='rounded-circle' height={'30px'} alt="" srcset="" />
                            }
                            {
                                user ? <Button onClick={handleSignOut} variant='success'>Logout</Button> :
                                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'default')}>Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;