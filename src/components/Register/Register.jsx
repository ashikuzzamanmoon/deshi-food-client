import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                form.reset();
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='border w-75 shadow pb-5 m-5'>
                <div className='text-center my-5'>
                    <h2>Please Register</h2>
                    <p>Hey, Enter your details to get sign in to your account</p>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <Form onSubmit={handleSubmit} className='w-50'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter name" name='name' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="email" placeholder="Enter photo url" name='photo' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' required />
                        </Form.Group>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button variant="primary" type="submit" className='w-100'>
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className='text-center'>
                    <p className='text-center fw-semibold mt-4'> Or Sign up with</p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <Button variant="outline-primary"> <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1683030098~exp=1683030698~hmac=a172fbf96bc191335562a518ae58b3fe0d5807cd0aa88a9835adf20c6d03047b" alt="" style={{ height: "18px" }} className='' /> Google</Button>
                    <Button variant="outline-primary"> <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?w=740&t=st=1683032868~exp=1683033468~hmac=f8415bbd3b9f44c83a6fc67837cddfa6e2ffcae53ccc7cc709f64b9664d7b433" alt="" style={{ height: "18px" }} /> Github</Button>
                </div>
                <div className='text-center mt-5'>
                    <p className='fw-semibold'>Already have an account? Please <Link to="/login">Log in</Link> </p>
                </div>
                <p className='text-danger text-center'>{error}</p>
            </div>
        </div>
    );
};

export default Register;