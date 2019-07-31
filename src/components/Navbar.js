import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/LOGO-MOVENU-BLANCO.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
        <div className="Navbar__brand">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Crisis</span>
            <span className="font-weight-bold">Staff</span>
          </Link>
          <Link  to="/comite/unicameral">
              <span className="font-weight-light Navbar__items">
                Crisis Unicameral
              </span>
          </Link>  
          <Link  to="/comite/bicameral">
              <span className="font-weight-light Navbar__items">
                Crisis Bicameral
              </span>
          </Link>  
          <Link  to="/comite/security">
              <span className="font-weight-light Navbar__items">
                Security Council
              </span>
           </Link>  

            </div> 
        </div>
      </div>
    );
  }
}

export default Navbar;
