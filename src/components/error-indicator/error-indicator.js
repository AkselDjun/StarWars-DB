
import React from 'react';

import './error-indicator.css';
import icon from './death-star.jpg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="boom"><h2>BOOM!</h2></span>
            <span>
                <h4>
                    Something has gone terribly wrong
                </h4>
            </span>
            <span>
                <h5>
                    (but we already sent droids to fix it)
                </h5>
            </span>
        </div>
    );
};

export default ErrorIndicator;