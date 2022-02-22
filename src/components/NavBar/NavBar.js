import React from "react";
import '../../App.css';
import {Link} from 'react-router-dom';
// import logo from '../assets/badge.png';
const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container" />
            <div className="container-fluid">
            {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a> */}
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                <a className="nav-link active"><Link to="/home">Home</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link"><Link to="/about">About Me</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link"><Link to="/experience">Experience</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link"><Link to="/portfolio">Portfolio</Link></a>
                </li>
                <li className="nav-item">
                <a className="nav-link"><Link to="/contact">Contact</Link></a>
                </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
export default NavBar;