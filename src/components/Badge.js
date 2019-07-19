import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.delegado} <br /> {this.props.comite}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>{this.props.descripcion}</p>
          <div>@{this.props.asunto}</div>
        </div>

        <div className="Badge__footer">#crisis</div>
      </div>
    );
  }
}

export default Badge;
