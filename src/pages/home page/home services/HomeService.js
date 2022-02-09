import { Container } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import './HomeService.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import HomeSingleService from './home single service/HomeSingleService';



const HomeService = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        Aos.init({ duration: 1500 })

    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)

    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className='homeServices'>
            <Container>
                <h2 className='sectionTitle'>Our Services</h2>
                <p className='serviceText'>we provide the best services ever. There are various service u can have here are some most popular services:</p>

                <div>
                    <h3> <u>Hair & Skin Care</u> </h3>
                    <Box data-aos="zoom-in-right" sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 3, md: 12 }}>
                            {services.map((service) => (
                                <Grid item xs={2} sm={4} md={4} key={service._id}>
                                    {service.category === "hair and skin care" && (
                                        <Link className='service-link' to={`/booking/${service._id}`}>
                                            <HomeSingleService service={service} />
                                        </Link>
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <h3 className='rightSide-title'> <u>Nail & Spa</u> </h3>
                    <Box data-aos="zoom-in-left" sx={{ flexGrow: 1, mb: '15%' }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 3, md: 12 }}>
                            {services.map((service) => (
                                <Grid item xs={2} sm={4} md={4} key={service._id}>
                                    {service.category === "nail and spa" && (
                                        <Link className='service-link' to={`/booking/${service._id}`}>
                                            <HomeSingleService service={service} />
                                        </Link>
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </Container >
        </div >
    );
};

export default HomeService;