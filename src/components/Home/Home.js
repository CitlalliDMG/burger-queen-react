import React, { Component } from "react";

import withAuthorization from "../../session/withAuthorization";
import data from "../../data/menu.json";
import "./Home.css";

import CustomerForm from '../CustomerForm/CustomerForm';
import TakeOrderButtons from '../TakeOrderButtons/TakeOrderButtons';
import SendOrder from '../SendOrder/SendOrder';

// console.log(data);

class HomePage extends Component {
  constructor(){
    super();
    this.state= {
      customerName: "",
      menu: null,
      order: [],
      total: 0
    }
  }

  // Get the customer name from component CustomerFrom
  fromCustomerForm(inputName) {
    this.setState({
      customerName: inputName
    })
  }

  // Set the order state raising the state from the child of TakeOrderButtons
  fromTakeOrderButtons(price, name){
    this.setState({
      order:[...this.state.order, {name:[name.toUpperCase()], price: price}]
    })
    const newTotal = this.state.total + price;
    this.setState({
      total: newTotal
    })
  }

  //Remove items from the order
  fromRemoveItemButtons(itemToBeRemoved){
    const newOrder = [...this.state.order];
    const removeIndex = newOrder.map(item => {return item.name;}).indexOf(itemToBeRemoved.name);
    newOrder.splice(removeIndex,1);
    const newTotal = this.state.total - itemToBeRemoved.price;
    this.setState({
      order: newOrder,
      total: newTotal
    })
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <p>1) Ingresa el nombre del cliente</p>
            <CustomerForm getName={this.fromCustomerForm.bind(this)} />
            <p>2) Toma la orden</p>
            <TakeOrderButtons data={data} orderTaked={this.fromTakeOrderButtons.bind(this)} />
          </div>
          <div className="col-md-5 mt-3">
            <p>3) Verifica el pedido</p>
            <SendOrder customerName={this.state.customerName} order={this.state.order} total={this.state.total} remove={this.fromRemoveItemButtons.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}


const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
