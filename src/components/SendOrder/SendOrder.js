import React from 'react';

import './SendOrder.css'

const SendOrder = (props) => {
  const isInvalid =
    props.customerName === '' ||
    props.order.length === 0

  return (
    <aside className="card">
      <div className="card-body order">
      <p className="card-tittle">Cliente</p>
      <p className="card-text">{props.customerName}</p>
      <hr/>
      {props.order.map((item, index) => (
            <p
              key={index}
            >
              {Object.keys(item) + " - $" +Object.values(item)}
            </p>
      ))}
      </div>
      <div className="card-body">
        <hr/>
        <p className="card-text">Total:</p>
        <button
          disabled={isInvalid}
        >
          Enviar orden
        </button>
      </div>
    </aside>
   );
}

export default SendOrder;
