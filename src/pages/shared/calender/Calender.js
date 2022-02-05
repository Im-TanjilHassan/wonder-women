import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './Calender.css'
import { CalendarPicker } from '@mui/lab';

const Calender = ({ date, setDate }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
                className='calender'
                date={date}
                onChange={(newDate) => setDate(newDate)} />
        </LocalizationProvider>
    );
};

export default Calender;