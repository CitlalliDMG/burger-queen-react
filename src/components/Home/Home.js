import React from "react";

import withAuthorization from "../../session/withAuthorization";
import data from "../../data/menu.json";
import "./Home.css";

import CustomerForm from '../CustomerForm/CustomerForm';
import TakeOrderButtons from '../TakeOrderButtons/TakeOrderButtons';

console.log(data);

const INITIAL_STATE = {
  customerName: "",
  menu: null,
  order: []
};

const HomePage = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <p>1) Ingresa el nombre del cliente</p>
        <CustomerForm state={INITIAL_STATE}/>
        <p>2) Toma la orden</p>
        <TakeOrderButtons data={data} />
      </div>
      <div className="col-md-4 mt-3">
        <p>3) Verifica el pedido</p>
      </div>
    </div>
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
