import React from 'react';
import './ReviewBox.css'
import { Button, Container } from '@mui/material';

const ReviewBox = () => {
    return (
        <Container>
            <p className='text'>Write about your experience with us:</p>
            <form>
                <input className='mailInput' type="email" placeholder='Email' />
                <br />
                <textarea className='reviewArea' placeholder='Review' name="review" cols="30" rows="10"></textarea>
                <br />
                <Button className='submit' variant='contained'>Submit</Button>
            </form>
        </Container>
    );
};

export default ReviewBox;