import React, { Component } from 'react';

class CustomerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: "",
      menu: null,
      order: []
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { customerName } = this.state;

    console.log({ customerName });
  };

  render() {
    const { customerName } = this.state;

    const isInvalid = customerName.trim() === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="customerName"
          value={customerName}
          onChange={this.onChange}
          type="text"
          placeholder="Nombre del cliente"
          className="customer col-6 mr-5"
        />
        <button disabled={isInvalid} type="submit" className="customer col-6">
          Guardar nombre
        </button>
      </form>
    );
  }
}

export default CustomerForm;
