import React, { Component } from "react";

import withAuthorization from "../../session/withAuthorization";
import data from "../../data/menu.json";
import "./Home.css";

import MenuDisplay from "../MenuDisplay/MenuDisplay";

console.log(data);
// const typeOfMenu = Object.values(data.categories);

const HomePage = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <p>1) Ingresa el nombre del cliente</p>
        <CustomerForm />
        <p>2) Toma la orden</p>
        {/* <TakeOrderButtons typesOfMenu={typeOfMenu} /> */}
        <TakeOrderButtons data={data} />
      </div>
      <div className="col-md-4 mt-3">
        <p>3) Verifica el pedido</p>
      </div>
    </div>
  </div>
);

const INITIAL_STATE = {
  customerName: "",
  // error: null,
  itemsOrdered: []
};

class CustomerForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
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

class TakeOrderButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null
    };
  }

  selectMenu = (key, allItems) => {
    console.log(key);
    const menuSelectedItems = allItems.filter(item => {
      return item.category === key;
    });
    this.setState({menu: menuSelectedItems})
    //console.log(menuSelectedItems);
  };

  render() {
    console.log(this.props.data);
    const typesOfMenu = Object.values(data.categories);

    return (
      <div>
        <div className="main-buttons mb-3">
          {typesOfMenu.map((type, index) => (
            <button
              className="menu-buttons"
              onClick={() => this.selectMenu(index, data.items)}
              key={index}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
        <MenuDisplay menu={this.state.menu} />
      </div>
    );
  }
}

export { CustomerForm, TakeOrderButtons };

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
