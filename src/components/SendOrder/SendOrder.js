import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SendOrder.css";

class SendOrder extends Component {

  render() {
    const isInvalid =
      this.props.customerName.trim() === "" || this.props.order.length === 0;

    const withoutOrder =
      this.props.order.length === 0 || isInvalid === true;

    return (
      <aside className="card">
        <div className="card-body pb-0">
          <p className="card-tittle">Cliente: <span className="bold">{this.props.customerName}</span></p>
        </div>
        <div className="card-body order">
          {this.props.order.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Items</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {this.props.order.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name + " - $" + item.price}</td>
                      <td className="text-right">
                        <button
                          onClick={e => this.props.remove(item)}
                          type="button"
                          className="bnt btn-default btn-small"
                        >
                          <FontAwesomeIcon icon="trash" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-center">"No has agregado items a la orden"</p>
          )}
        </div>
        <div className="card-body">
          <p className="card-text">
          Items: <span className="bold">{this.props.order.length}</span> - Total: <span className="bold">${this.props.total}</span>
          </p>
          <button disabled={isInvalid}>Enviar orden</button>
          <button disabled={withoutOrder} type="button" className="btn-danger mb-0" onClick={e => this.props.clearAll()} >Cancelar orden</button>
        </div>
      </aside>
    );
  }
}

export default SendOrder;
