import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.init';
import { AuthContext } from '../Authentication/AuthProvider';

const auth = getAuth(app);

const Login = () => {
   
            const { loginUser, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (!/(?=.[0-9].[0-9])/.test(password)) {
            return setError(" Ensure string has two digits")
        }
        else if (password.length < 6) {
            return setError("Ensure Password length is 6");
        }
        setSuccess('')
        setError('');
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                setSuccess("Successfully Login !")
                navigate(from, { replace: true });
                form.reset()
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        setError('')
        setSuccess('')
        googleSignIn()
        .then(result =>{
            setSuccess("Successfully login")
            navigate(from, { replace: true });
            
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const handleGitHubSignIn = () => {
        setError('')
        setSuccess('')
        gitHubSignIn()
        .then(result =>{
            setSuccess("Successfully login")
            navigate(from, { replace: true });
          
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='border w-75 shadow pb-5 m-5'>
                <div className='text-center my-5'>
                    <h2>Please Login</h2>
                    <p>Hey, Enter your details to get sign in to your account</p>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <Form onSubmit={handleSubmit} className='w-50'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' />
                        </Form.Group>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button variant="primary" type="submit" className='w-100'>
                                Login
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className='text-center'>
                    <p className='text-center fw-semibold mt-4'> Or Sign in with</p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <Button onClick={handleGoogleSignIn} variant="outline-primary"> <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1683030098~exp=1683030698~hmac=a172fbf96bc191335562a518ae58b3fe0d5807cd0aa88a9835adf20c6d03047b" alt="" style={{ height: "18px" }} className='' /> Google</Button>
                    <Button variant="outline-primary" onClick={handleGitHubSignIn}> <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?w=740&t=st=1683032868~exp=1683033468~hmac=f8415bbd3b9f44c83a6fc67837cddfa6e2ffcae53ccc7cc709f64b9664d7b433" alt="" style={{ height: "18px" }} /> Github</Button>
                </div>
                <div className='text-center mt-5'>
                    <p className='fw-semibold'>Don't have an account? Please <Link to="/register">Register</Link> </p>
                </div>
                <p className='text-danger text-center'>{success}</p>
                <p className='text-danger text-center'>{error}</p>
            </div>
        </div>
    );
};

export default Login;