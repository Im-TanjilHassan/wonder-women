import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button, Container, Stack } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import './bookingmodal.css'


const BookingModal = ({ open, handleClose, service, date }) => {

    const { title } = service
    const { user } = useAuth()

    const idleInfo = { email: user.email, name: user.displayName, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(idleInfo)


    const handleOnBlur = e => {

        const field = e.target.name
        const value = e.target.value

        const newInfo = { ...bookingInfo }
        newInfo[field] = value
        setBookingInfo(newInfo)

    }

    const handleBookingSubmit = e => {
        e.preventDefault()

        // collect data
        // const appointment = {
        //     ...bookingInfo,
        //     time,
        //     serviceName: title,
        //     date: date.toLocaleDateString()
        // }

        // send appointment data to the server
        // fetch('http://localhost:5000/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(appointment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             setBookingDone(true)
        //             handleClose()
        //         }
        //     })


    }

    return (
        <Container>
            <div >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='modal'>
                        <Typography className='booking-title' id="modal-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                        <form onSubmit={handleBookingSubmit} style={{ padding: '0 15px' }}>
                            <TextField
                                disabled
                                className='bookingDetail'
                                id="outlined-size-small"
                                defaultValue='Available time 8am-10pm'
                                size="small"
                            />
                            <TextField
                                className='bookingDetail'
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name='name'
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                className='bookingDetail'
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name='phone'
                                defaultValue='Phone Number'
                                size="small"
                            />
                            <TextField
                                className='bookingDetail'
                                id="outlined-size-small"
                                onBlur={handleOnBlur}
                                name='email'
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                disabled
                                className='bookingDetail'
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />

                            <Stack spacing={2} direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button type='submit' className='book-btn' variant="contained">Book</Button>
                            </Stack>
                        </form>
                    </Box>
                </Modal>
            </div>
        </Container>
    );
};

export default BookingModal;