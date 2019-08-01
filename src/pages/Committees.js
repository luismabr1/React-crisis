import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Committees.css';
import LinkBicameral from '../components/LinkBicameral';
import LinkSecurity from '../components/LinkSecurity';
import LinkUnicameral from '../components/LinkUnicameral';
import confLogo from '../images/LOGO-MOVENU-BLANCO.png';


class Committees extends React.Component{
   render(){
       return ( 
       <React.Fragment>
       <div className="Badges">
         <div className="Badges__hero">
           <div className="Badges__container">
             <img
               className="Badges_conf-logo"
               src={confLogo}
               alt="Conf Logo"
             />
           </div>
         </div>
       </div>


     <div className="Badges__container">

         <div className="Badges__buttons">
           <Link to="/comite/unicameral" >
                <LinkUnicameral />
            </Link>

            <Link to="/comite/bicameral" >
                <LinkBicameral />
            </Link>

            <Link to="/comite/security" >    
                <LinkSecurity />
           </Link>

         </div>
     </div>

     </React.Fragment>
   )} 
   }


export default Committees;
