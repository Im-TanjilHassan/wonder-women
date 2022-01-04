import React from 'react';
import './Footer.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';


const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid sx={{ mx: 'auto' }} container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <h2 className='footer-title'>Wonder Women</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corrupti illo fuga </p>

                            </Grid>
                            <Grid item xs={12} md={3}>
                                <h2 className="footer-title">Location</h2>
                                <p>West Vagenia, NY, America</p>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <h2 className="footer-title">Working Hours</h2>
                                <p>Monday - Friday <br /> 09:00 - 22:00</p>
                                <p>Saturday - Sunday <br /> 11:00 - 12:00</p>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <h2 className="footer-title">Contact with us</h2>
                                <p>our phone: +0012354866</p>
                                <p>Our Email: woderwomen@gmail.com</p>

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            <div className='bottom-footer'>
                <p className='copyright'>Copyright © 2022 Wonder Women.</p>
            </div>
        </div>


    );
};

export default Footer;