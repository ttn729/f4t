import React from "react";
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div>
            <div className="wrapper">
                <h1>Page not found!</h1>
                <Link to="/">Go back to the Spicy Cat home page!</Link>
            </div>
        </div>
    );
};

export default Error404;
