import { Container } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../shared/navigation/Navigation';
import './services.css'

const Services = () => {
    return (
        <div>
            <Navigation />
            <Container>
                <div className='page-header'>
                    <h2 className='page-title'>Our Services</h2>
                    <p>We provide the best service ever. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iure.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iure.</p>
                </div>
                <hr />
                <div className='nested-route'>
                    <Link to={'/service/hairSkinCare'} className='nested-route-link'>
                        <h3>Hair & Skin</h3>
                    </Link>
                    <Link to={'/service/nailSpa'} className='nested-route-link'>
                        <h3>Nail & Spa</h3>
                    </Link>
                    <Link to={'/service/weeding'} className='nested-route-link'>
                        <h3>Wedding</h3>
                    </Link>
                </div>
                <Outlet />
            </Container>
        </div>
    );
};

export default Services;