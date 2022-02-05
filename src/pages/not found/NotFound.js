import React from 'react';

const NotFound = ({ error }) => {
    return (
        <div>
            <h1>Not found.</h1>
            <p>{error}</p>
        </div>
    );
};

export default NotFound;