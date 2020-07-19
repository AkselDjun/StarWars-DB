import React from 'react';

import "./header.css"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container fontStyle">
                <a className="navbar-brand text-info font-weight-bold text-brand" href="../../../public/index.html">StarWarsDB</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
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