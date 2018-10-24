import React, { Component } from 'react';

import withAuthorization from '../../session/withAuthorization';
import data from '../../data/menu.json';

console.log(data);


const HomePage = () =>
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <CustomerForm />
      </div>
      <div className="col-md-4">
        <p>Aquí va a ir la suma</p>
      </div>
    </div>
  </div>

class CustomerForm extends Component {
  render() {
    return (
      <p>Aquí va el form para ingresar el nombre del cliente</p>
    );
  }
}

export {
  CustomerForm
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
