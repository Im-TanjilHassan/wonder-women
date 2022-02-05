import { Alert, Button, Container, TextField } from '@mui/material';
import React from 'react';
import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [userInfo, setUserInfo] = useState({})
    const { register, error, user, loading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleOnBlur = (e) => {

        const inputField = e.target.name
        const value = e.target.value

        const newLogInData = { ...userInfo }
        newLogInData[inputField] = value
        setUserInfo(newLogInData)
    }
    const handleRegistration = (e) => {

        if (userInfo.password !== userInfo.password2) {
            alert("Password didn't match")
            return
        }
        register(userInfo.email, userInfo.password, location, navigate)
        e.preventDefault()

    }

    return (
        <Container>
            <div className='login-page'>
                <form className='login-form' onSubmit={handleRegistration}>
                    {user?.email ? <h2>{user.email}</h2> : <h2>Register</h2>}
                    {loading ?

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <CircularProgress className='spinner' />
                            <Typography variant='p'>Wait a sec...</Typography>
                        </Box>
                        :
                        <div className='form-filed'>
                            <TextField
                                className='input-field'
                                type='text'
                                id="filled-basic"
                                label="Your Name"
                                name='name'
                                onBlur={handleOnBlur}
                                variant="filled"
                            />
                            <TextField
                                className='input-field'
                                type='email'
                                id="filled-basic"
                                label="Email"
                                name='email'
                                onBlur={handleOnBlur}
                                variant="filled"
                            />
                            <TextField
                                className='input-field'
                                type='password'
                                id="filled-basic1"
                                label="Password"
                                name='password'
                                onBlur={handleOnBlur}
                                variant="filled"
                            />
                            <TextField
                                className='input-field'
                                type='password'
                                id="filled-basic2"
                                label="Re-Write Password"
                                name='password2'
                                onBlur={handleOnBlur}
                                variant="filled"
                            />
                            <Button className='submit-Btn' type='submit' variant='text'>Register</Button>
                            {error ? <p>error.massage</p> : ''}
                            <Link className='route-link' to='/login'>Already have an account? Please Log-In</Link>
                        </div>}
                    {user?.email &&
                        <Alert severity="success" className='alert'>Registration successful!</Alert>
                    }
                    {error &&
                        <Alert severity="error" className='alert'>{error}!</Alert>
                    }
                </form>
            </div>
        </Container>
    );
};

export default Register;