import React from 'react';
import { useRouteError } from 'react-router-dom';
import './error.css'

const Error = () => {
    const error = useRouteError()
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className='font-semibold'>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;