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
    const [missPass, setMissPass] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const handleOnBlur = (e) => {

        const inputField = e.target.name
        const value = e.target.value

        const newLogInData = { ...userInfo }
        newLogInData[inputField] = value
        console.log(newLogInData)
        setUserInfo(newLogInData)
    }


    const handleRegistration = (e) => {

        e.preventDefault()
        if (userInfo.password !== userInfo.password2) {
            const alert = "Password didn't match"
            setMissPass(alert)
            return
        }
        register(userInfo.email, userInfo.password, userInfo.name, userInfo.image, location, navigate)

    }

    return (
        <Container>
            <div className='registration-page'>
                <form className='registration-form' onSubmit={handleRegistration}>
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
                                id="filled-basic0"
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
                            {/* <div className='file-upload-div'>
                                <input
                                    type="file"
                                    name="profileImg"
                                    onBlur={handleFileTypeInput}
                                    accept='image/*'
                                    id='file'
                                />
                                <label className='file-upload-lable' htmlFor="file">profile picture:</label>
                            </div> */}
                            <Button className='submit-Btn' type='submit' variant='text'>Register</Button>
                            {error ? <p>error.massage</p> : ''}
                            {missPass && <Alert severity="error" className='alert'>{missPass}!</Alert>}
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