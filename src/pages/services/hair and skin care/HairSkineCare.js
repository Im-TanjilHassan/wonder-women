import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSingleService from '../../home page/home services/home single service/HomeSingleService';

const HairSkineCare = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        Aos.init({ duration: 1500 })

    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container>
            <Box data-aos="zoom-in" sx={{ flexGrow: 1 }}>
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
        </Container >
    );
};

export default HairSkineCare;