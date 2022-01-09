import React from 'react';
import { useParams } from 'react-router-dom';

const SingleService = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>this is single service: {serviceId}</h2>
        </div>
    );
};

export default SingleService;