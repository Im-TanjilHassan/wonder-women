import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import Banner from '../banner/Banner';
import Aboutus from '../../home page/about us/Aboutus'
import HomeService from '../home services/HomeService';
import Review from '../review/Review';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Aboutus />
            <HomeService />
            <Review />
        </div>
    );
};

export default Home;