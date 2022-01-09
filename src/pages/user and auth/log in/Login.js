import { Button, CircularProgress, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import './Lgoin.css'
import googleLogo from '../../../images/logo/googleLogo.png'
import facebookLogo from '../../../images/logo/fb.png'
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const { login, error, user, loading } = useAuth()
    const [userInfo, setUserInfo] = useState({})
    const [alertBox, setAlertBox] = useState(null)


    const handleOnBlur = (e) => {

        const inputField = e.target.name
        const value = e.target.value

        const newLogInData = { ...userInfo }
        newLogInData[inputField] = value
        setUserInfo(newLogInData)
    }

    const handleLogIn = e => {
        login(userInfo.email, userInfo.password)
        if (error) {
            alert(error)
        }
        e.preventDefault()
    }

    return (
        <Container>
            <div className='login-page'>
                <form className='login-form' onSubmit={handleLogIn}>
                    {user?.email ? <h2>{user.email}</h2> : <h2>Log-in</h2>}
                    {loading ?
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <CircularProgress className='spinner' />
                            <Typography variant='p'>Wait a sec...</Typography>
                        </Box>
                        :
                        <div className='form-filed'>
                            <TextField
                                className='input-field'
                                type='email'
                                name='email'
                                onBlur={handleOnBlur}
                                id="filled-basic"
                                label="Email"
                                variant="filled"
                            />
                            <TextField
                                className='input-field'
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                                id="filled-basic1"
                                label="Password"
                                variant="filled"
                            />
                            <Button className='login-Btn' type='submit' variant='text'>Log-in</Button>
                            <p>- - - - - - OR - - - - - -</p>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid sx={{ mb: '8%' }} container spacing={2}>
                                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={6} md={6}>
                                        <img className='login-logo' src={googleLogo} alt="google logo" />
                                    </Grid>
                                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={6} md={6}>
                                        <img className='login-logo' src={facebookLogo} alt="facebook logo" />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Link className='route-link' to='/register'><p>Don't have an account? Please Register</p></Link>
                        </div>}
                    {user.email &&
                        <Alert onClose={() => { }} severity="success" className='alert'>Log-In successful!</Alert>
                    }
                    {error &&
                        <Alert onClose={() => { }} severity="error" className='alert'>{error}!</Alert>
                    }
                </form>

            </div>
        </Container>
    );
};

export default Login;