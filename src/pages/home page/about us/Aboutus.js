import { Button, Container } from '@mui/material';
import React, { useEffect } from 'react';
import './aboutus.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import aboutUs from "../../../images/aboutus/aboutUs.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'


const ServiceSample = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (

        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <div className='sampleService'>
                <Container>
                    <h2 className='sectionTitle'>About Us</h2>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid sx={{ py: '2%' }} container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <img className='aboutusImg' src={aboutUs} alt="wonder women parlor pic" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <h3 className='section-subtitle'>Wonder Women</h3>
                                <p className='aboutText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quia ipsam natus cum molestiae nihil cumque beatae laborum eum distinctio nam vitae reiciendis est, obcaecati explicabo veritatis blanditiis. Doloremque, repellendus.amet consectetur adipisicing elit. Doloribus quia ipsam natus cum molestiae nihil cumque beatae laborum eum distinctio nam vitae reiciendis est, obcaecati explicabo veritatis blanditiis. Doloremque, repellendus...</p>
                                <Button className='readmoreBtn' variant='contained'>Read More <i className="fas fa-chevron-right"></i></Button>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </div>
        </div>


    );
};

export default ServiceSample;