import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SendOrder.css'

class SendOrder extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    const isInvalid =
      this.props.customerName.trim() === '' ||
      this.props.order.length === 0

    return (
      <aside className="card">
        <div className="card-body order">
        <p className="card-tittle">Cliente</p>
        <p className="card-text bold">{this.props.customerName}</p>
        <hr/>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {this.props.order.map((item, index) => {
              return(
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name + " - $" + item.price}</td>
                  <td className="text-right">
                    <button onClick={(e) => this.props.remove(item)} type="button" className="bnt btn-default btn-small">
                      <FontAwesomeIcon icon="trash"/>
                    </button>
                  </td>
                </tr>
              )
              })
            }
          </tbody>
        </table>
        </div>
        <div className="card-body">
        <hr/>
        <p className="card-text">Total: {this.props.total}</p>
          <button
            disabled={isInvalid}
          >
            Enviar orden
          </button>
        </div>
      </aside>
      )
  }
}

export default SendOrder;


