import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Delegado</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="delegado"
              value={this.props.formValues.delegado}
            />
          </div>

          <div className="form-group">
            <label>Comité</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="comite"
              value={this.props.formValues.comite}
            />
{/*             <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="comite"
              value={this.props.formValues.comite}
            /> */}
          </div>

          <div className="form-group">
            <label>Asunto</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="asunto"
              value={this.props.formValues.asunto}
            />
          </div>

          <div className="form-group">
            <label>Descripcion</label>
            <textarea
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="descripcion"
              
              value={this.props.formValues.descripcion}
            />
          </div>

          <div className="form-group">
            <label>Clave</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="clave"
              value={this.props.formValues.clave}
            />
          </div>
        
          <div className="form-group">
            <label>Avatar</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              value={this.props.formValues.email}
            />
          </div> 

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
