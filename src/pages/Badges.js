import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/LOGO-MOVENU-BLANCO.png';
import BadgesList from '../components/BadgesList';
import BadgesListTwo from '../components/BadgesListTwo';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';
import apiTwo from '../api_two';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 320000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  fetchDataTwo = async () => {
    this.setState({ loading: true, error: null });

    try {
      const dataTwo = await apiTwo.badgesTwo.list();
      this.setState({ loading: false, data: dataTwo });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data && !this.state.dataTwo) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

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

      <div className="Badges__list__container">
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New State one
            </Link>
          </div>

          <BadgesList badges={this.state.data}/>

          {this.state.loading && <MiniLoader />}
       </div>

       </div>
       <div className="Badges__list__container">

        <div className="Badges__container">
          <div className="Badges__buttons_two">
            <Link to="/badges/newtwo" className="btn btn-primary">
              New State two
            </Link>
          </div>
          <BadgesListTwo badges={this.state.data}/>

          {this.state.loading && <MiniLoader />}
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Badges;
