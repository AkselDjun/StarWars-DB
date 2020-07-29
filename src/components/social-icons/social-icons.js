import React from 'react';

import "./social-icons.css"

const SocialIcons = () => {
    return (
        <div className="basic">
            <ul className="ul-list">
                <li>
                    <a href="https://github.com/AkselDjun" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-github"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/alexei.khinevich" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-facebook"></span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alexei-khinevich/" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-linkedin"></span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialIcons;