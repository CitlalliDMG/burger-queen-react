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
        <button className="option-buttons" key={index}>
          {item.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default MenuDisplay;
