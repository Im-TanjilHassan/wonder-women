import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import Navigation from '../shared/navigation/Navigation';
import './MainAboutUs.css'
import Grid from '@mui/material/Grid';
import founder from '../../images/founder/founder.jpg'
import beautiCare from '../../images/icons/wpnderwomen1.png'
import beautiArt from '../../images/icons/wonderwomen2.png'
import trends from '../../images/icons/wonderwomen3.png'
import banner1 from '../../images/banner/banner1.jpg'
import Aos from 'aos';
import Footer from '../shared/foother/Footer';


const MainAboutUs = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div>
            <Navigation />
            <Container>
                <div className='aboutUs-header'>
                    <p>Wonder Women</p>
                    <h2>About Us</h2>
                </div>
                <div className='founder'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" className='founder-img' src={founder} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='about-founder'>
                                <h3>Our Story</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quo repellat libero pariatur esse vero recusandae magni laborum obcaecati, quasi similique </p>
                                <h4>Always Leading and Ethical</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <h4>Our Founder</h4>
                                <p>Nezuko Kamado</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='nameless-section'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <div className='box'>
                                <img src={beautiCare} alt="" />
                                <h4>Beauty Care</h4>
                                <p>Lorem ipsum dolor sit amet consectetur  amet consectetur </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className='box'>
                                <img src={beautiArt} alt="" />
                                <h4>Beauty Art</h4>
                                <p>Lorem ipsum dolor sit amet consectetur amet consectetur</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className='box'>
                                <img src={trends} alt="" />
                                <h4>Tips & Trends</h4>
                                <p>Lorem ipsum dolor sit amet consectetur  amet consectetur</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="contact">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div className='contact-info'>
                                <h3>Contact Us</h3>
                                <p>quia ipsum nesciunt voluptatem tempora in voluptatum sapiente reprehenderit aut perferendis tempore culpa! Debitis.</p>
                                <br />
                                <p>Location: 1498 Bryant St 0/265, San Francisco, CA 94103</p>
                                <br />
                                <p>Phone: +456 741 852 33, +456 741 855 33</p>
                                <br />
                                <p>Email: wonderwomen@gmail.com</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" className='founder-img' src={banner1} alt="" />
                        </Grid>
                    </Grid>
                </div >
            </Container >
            <hr />
            <Footer />
        </div >
    );
};

export default MainAboutUs;