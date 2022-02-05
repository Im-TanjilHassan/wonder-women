import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()


    if (loading) { return <CircularProgress /> }


    return (
        user.email ? (
            children
        ) :
            <Navigate to='/login' state={{ from: location }} />

    );
};

export default PrivateRoute;