import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Committees.css';
import CommitteesList from '../components/CommitteeList';
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

     <div className="Badges__list__container">
       <div className="Badges__container">
         <div className="Badges__buttons">
           <Link to="/badges/new" className="btn btn-primary">
                <CommitteesList />
           </Link>
         </div>

      </div>

       </div>
     </div>
     </React.Fragment>
   )} 
   }


export default Committees;
