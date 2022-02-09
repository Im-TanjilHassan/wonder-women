import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleService.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Calender from '../../shared/calender/Calender'
import BookingModal from './bookingModal/BookingModal';

const SingleService = () => {
    const { serviceId } = useParams()

    const [service, setService] = useState('')
    const [date, setDate] = React.useState(new Date());

    // to load single data
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    // destructuring data
    const { title, description, price, specialist } = service

    // modal open and close function
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <div>
                <h2 className='service-title'>{title}</h2>

                {/* service information */}
                <Box sx={{ flexGrow: 1, pb: '5%', mb: '10%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Calender date={date} setDate={setDate} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='service-detail'>
                                <p>{description}</p>
                                <p>Specialist: <span>{specialist}</span></p>
                                <p>Price: $<span>{price}</span> </p>
                                <Button variant='text' onClick={handleOpen} className='booking'>Book Appointment</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                {/*  modal component */}
                <BookingModal
                    date={date}
                    service={service}
                    open={open}
                    handleClose={handleClose}
                ></BookingModal>

            </div>
        </Container>
    );
};

export default SingleService;