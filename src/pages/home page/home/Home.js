import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import Banner from '../banner/Banner';
import Aboutus from '../../home page/about us/Aboutus'
import HomeService from '../home services/HomeService';
import Review from '../review/Review';
import Footer from '../../shared/foother/Footer';
import ContactUs from '../contact us/ContactUs';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Aboutus />
            <HomeService />
            <Review />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;