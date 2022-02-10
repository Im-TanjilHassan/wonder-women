import { Container } from '@mui/material';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (

        <div className='banner'>
            <Container>
                <div className='textArea'>
                    <h3 className='welcome-txt'>Welcome to</h3>
                    <h1 className='special-title'>Wonder Women</h1>
                    <h3>the best Women Parlour with so many services</h3>
                </div>
                <div className='social'>
                    <a className='socialLink' href="fb page"><i className="fab fa-facebook"></i></a>
                    <a className='socialLink' href="instagram id"><i className="fab fa-instagram"></i></a>
                    <a className='socialLink' href="whatsApp link"><i className="fab fa-whatsapp"></i></a>

                    <p>Stay in touch via social media</p>

                </div>
            </Container>
        </div>
    );
};

export default Banner;