import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../shared/navigation/Navigation';
import './addService.css'
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddService = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = useState(false)

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset()

                }

            })

    }

    return (
        <div>
            <Navigation />
            <Container>
                <div className="container">
                    <h2 className='title'>Add New Service</h2>
                    <p className='note'><b>Note:</b> for selecting service image please upload service image first and get the image direct url then add it. I repeat add img direct url. There are lot of website for uploading img. I recommend <a href="https://imgbb.com/" target='_blank'>imgbb.com</a>. Create an account in imgbb and upload your service image in imgbb first and get the img direct url and past.</p>
                    <div className="add-service">
                        <h3>New service Information</h3>

                        <form className='service-form' onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("title", { required: true })} placeholder='Title' />
                            <textarea {...register("description", { required: true })} placeholder='Description' />
                            <input {...register("price", { required: true })} placeholder='Price' type='number' />
                            <input {...register("specialist", { required: true })} placeholder='Specialist' />
                            <input {...register("category", { required: true })} placeholder='category' />
                            <input {...register("imgUrl", { required: true })} placeholder='Image-URL' />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <Button className='submit-Btn' type="submit" onClick={handleClick}>Add Service</Button>
                        </form>
                        {
                            success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Successfully Added!
                                </Alert>
                            </Snackbar>
                        }

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddService;