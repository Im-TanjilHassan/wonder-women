import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Aos from 'aos';
import React, { useEffect } from 'react';
import './ContactUs.css'
import useAuth from '../../../hooks/useAuth';

const ContactUs = () => {

    const { user } = useAuth()

    // animation on scroll
    useEffect(() => {
        Aos.init({ duration: 1700 })
    }, [])

    // contact submit button
    const handleContactSubmit = e => {
        e.preventDefault()
        alert('submitting...')
    }

    return (
        <div data-aos="zoom-in" className='contact-compo'>
            <Container>
                <Typography vairant='h6' className='contact-us' >CONTACT US</Typography>
                <Typography variant='h4' className='sub-title'>Feel free to contact with us</Typography>
                <form onSubmit={handleContactSubmit} className='contact-form'>
                    <span>
                        {
                            user?.email ? <TextField className='text-field' id="outlined-basic" disabled label={user.email} variant="filled" /> :
                                <TextField className='text-field' id="outlined-basic" label='Email Address' required variant="filled" />
                        }

                        <TextField className='text-field' id="outlined-basic" label="Topic" required variant="filled" />
                        <TextField
                            id="filled-multiline-static"
                            label="Massage"
                            multiline
                            rows={4}
                            variant="filled"
                            className='text-field'
                            required
                        />
                        <Stack spacing={2} direction="row">
                            <Button type='submit' variant="contained" className='msg-submit-btn'>SUBMIT</Button>
                        </Stack>
                    </span>

                </form>
            </Container>
            <hr />
        </div>

    );
};

export default ContactUs;