import React from "react";
import Logo from './Logo.png';


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img className="navbarLogo" src={Logo}  alt="logo" height="40px" width="auto"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cv">CV</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar
