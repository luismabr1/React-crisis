import React from 'react';
import './styles/LinkUnicameral.css';
import FotoUnicameral from '../images/fotounicameral.jpg'

class CommitteesList extends React.Component {
    render() {
      return (
        <div className="Unicameral__face">
            <div className="div-img">
                <img className="img" src={FotoUnicameral} alt="Crisis unicameral"></img>
                <div className="title">Hola Mundo unicameral</div>  
            </div>
        </div>
      );
    }
  }
  
  
  
  
  export default CommitteesList;