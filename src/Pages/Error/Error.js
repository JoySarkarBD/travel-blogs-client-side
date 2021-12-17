import React from 'react';
import errorImg from './404-error.jpg'
import Navigation from "../../Pages/Shared/Navigation/Navigation"

const Error = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="bg-white">
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default Error;