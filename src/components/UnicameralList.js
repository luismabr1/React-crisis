import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';



class UnicameralListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.delegado}
            &nbsp;&nbsp; || &nbsp;&nbsp;
            {this.props.badge.comite}
          </strong>
          <br />@{this.props.badge.asunto}
          <br />
          {this.props.badge.descripcion}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      if(badge.clave==="comitea"){
      return `${badge.descripcion}`
        .toLowerCase()
        .includes(query.toLowerCase());
      }
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function UnicameralList(props) {
  const badges = props.badges;


  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Directives</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No directives were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new state
        </Link>
      </div>
    );
  } 


  return (

    <div className="Badges__container">
        <div className="form-group">
            <label>Filter Directives</label>
            <input
              type="text"
              placeholder="Buscar en comite A "
              className="form-control"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
            />
          

          <ul className="list-unstyled">
            {filteredBadges.map(badge => {
              return (
                <li key={badge.id}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}`}
                  >
                    <UnicameralListItem badge={badge} />
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>

    
    </div>


  );
}




export default UnicameralList;
