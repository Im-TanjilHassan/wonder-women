import { Container } from '@mui/material';
import { React, useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
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
                    <NavLink to={'/service/hairSkinCare'} className={({ isActive }) =>
                        isActive ? 'activeRoute' : 'nested-route-link'
                    }>
                        <h3>Hair & Skin</h3>
                    </NavLink>
                    <NavLink to={'/service/nailSpa'} className={({ isActive }) =>
                        isActive ? 'activeRoute' : 'nested-route-link'
                    }>
                        <h3>Nail & Spa</h3>
                    </NavLink>
                    <NavLink to={'/service/weeding'} className={({ isActive }) =>
                        isActive ? 'activeRoute' : 'nested-route-link'
                    }>
                        <h3>Wedding</h3>
                    </NavLink>
                </div>
                <Outlet />
            </Container>
        </div>
    );
};

export default Services;