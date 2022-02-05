import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleService.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Calender from '../../shared/calender/Calender'

const SingleService = () => {
    const { serviceId } = useParams()

    const [service, setService] = useState('')
    const [date, setDate] = React.useState(new Date());

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { title, imgUrl, description, price, specialist } = service

    return (
        <Container>
            <div>
                <h2 className='service-title'>{title}</h2>

                <Box sx={{ flexGrow: 1, pb: '5%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Calender date={date} setDate={setDate} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='service-detail'>
                                <p>{description}</p>
                                <p>Specialist: <span>{specialist}</span></p>
                                <p>Price: $<span>{price}</span> </p>
                                <Button variant='text' className='booking'>Book Appointment</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>


            </div>
        </Container>
    );
};

export default SingleService;