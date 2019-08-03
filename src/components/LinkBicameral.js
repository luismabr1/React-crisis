import React from 'react';
import './styles/LinkBicameral.css';
import FotoFBI from '../images/fbi.jpg';
import LaComision from '../images/mafia.jpg';
import Gravatar from './Gravatar';

class CommitteesList extends React.Component {
    render() {
      return (
        <div className="Bicameral__face">
            <div className="div-img">
                <img className="img" src={FotoFBI}></img>
                <img className="img" src={LaComision}></img>
                <div className="title">Hola Mundo Bicameral</div>  
            </div>
        </div>
      );
    }
  }
  
  
  
  
  export default CommitteesList;