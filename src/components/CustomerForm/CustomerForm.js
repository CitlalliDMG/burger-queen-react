import React, { Component } from 'react';
import propTypes from 'prop-types';

class CustomerForm extends Component {

  inputName(event){
    this.props.getName(event.target.value);
  }

  render() {
    return (
      <section>
        <input
          value={this.props.initialName}
          onChange={this.inputName.bind(this)}
          type="text"
          placeholder="Ingresa el nombre del cliente"
          className="customer col-6 mr-5"
        />
      </section>
    );
  }
}

CustomerForm.propTypes = {
  inputName: propTypes.func,
}

export default CustomerForm;
