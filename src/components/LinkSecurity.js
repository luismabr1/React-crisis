import React from 'react';
import './styles/LinkSecurity.css';
import CrisisYemen from '../images/crisisyemen.jpg';

class CommitteesList extends React.Component {
    render() {
      return (
        <div className="Security__face">
            <div className="div-img">
                <img className="img" src={CrisisYemen} alt="Crisis en Yemen"></img>
                <div className="title">Hola Mundo Bicameral</div>  
            </div>
        </div>
      );
    }
  }
  
  
  
  
  export default CommitteesList;