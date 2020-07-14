import React from 'react';

import "./header.css"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container fontStyle">
                <a className="navbar-brand" href="../../../public/index.html">StarWarsDB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
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
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default Header;