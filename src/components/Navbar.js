import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/LOGO-MOVENU-BLANCO.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Crisis</span>
            <span className="font-weight-bold">Staff</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
