import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
import './bookingmodal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid rgb(235, 66, 94)',
    borderRadius: '10px',
    boxShadow: 24,
    p: 6,
};

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
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
    );
};

export default BookingModal;