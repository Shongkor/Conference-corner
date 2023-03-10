import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavBar.css'

const HomeNavBar = () => {
    return (
        <div className='my-3'>
            <div className='NavContainer'>
                <nav className="navbar navbar-expand-lg text-center">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to='/home'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/services'>Committees</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Important Dates</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Submission</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Registration</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Speakers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/reviews'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HomeNavBar;