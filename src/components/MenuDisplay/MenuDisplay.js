import React from "react";

const MenuDisplay = props => {
  console.log(props.menu);

  if (props.menu === null) {
    return (
      <div>
        <p>Elige un menú para ver los items disponibles</p>
      </div>
    );
  }

  return (
    <div className="menu">
      {props.menu.map((item, index) => (
        <button
          className="option-buttons"
          key={index}
          price={item.price}
          name={item.name}
          onClick={() => props.onClick(item.price, item.name)}
        >
          {item.name.toUpperCase()+"\n $" + item.price}
        </button>
      ))}
    </div>
  );
};

export default MenuDisplay;
