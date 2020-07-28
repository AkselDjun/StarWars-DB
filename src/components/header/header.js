import React from 'react';

import "./header.scss"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container fontStyle">
                <a className="navbar-brand font-weight-bold text-brand" href="../../../public/index.html">
                    <div className="glitch" data-text="StarWarsDB">StarWarsDB</div>
                    <div className="glow">StarWarsDB</div>
                </a>

                <div className="collapse navbar-collapse ulList">
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <a className="nav-link" href="../../../public/index.html">Peoples</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../../../public/index.html">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../../../public/index.html">Starships</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;