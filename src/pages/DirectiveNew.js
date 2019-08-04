import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/LOGO-MOVENU-BLANCO.png';
import Badge from '../components/Badge'; 
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      delegado: '',
      comite: '',
      clave: '',
      descripcion: '',
      asunto: '',
      email: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/comite/unicameral');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return ( 
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                delegado={this.state.form.delegado || 'DELEGATE'}
                comite={this.state.form.comite || 'COMMITTE'}
                asunto={this.state.form.asunto || 'ASUNTO'}
                descripcion={this.state.form.descripcion || 'DESCRIPTION'}
                clave={this.state.form.clave || 'KEY'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?d=identicon"
              />
            </div>

            <div className="col-6">
              <h1>Nueva Directiva</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
