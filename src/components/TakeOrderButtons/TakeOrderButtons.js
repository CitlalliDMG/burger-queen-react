import React, { Component } from 'react';

import MenuDisplay from "../MenuDisplay/MenuDisplay";


class TakeOrderButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      order: []
    };
  }

  handleOnClickMenu = (price, name) => {
    this.props.orderTaked(price, name);
  }

  selectMenu = (key, allItems) => {
    const menuSelectedItems = allItems.filter(item => {
      return item.category === key;
    });
    this.setState({menu: menuSelectedItems})
  };

  render() {
    // console.log(this.props.data);
    const typesOfMenu = Object.values(this.props.data.categories);

    return (
      <div>
        <div className="main-buttons mb-3">
          {typesOfMenu.map((type, index) => (
            <button
              className="menu-buttons"
              onClick={() => this.selectMenu(index, this.props.data.items)}
              key={index}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
        <MenuDisplay menu={this.state.menu} onClick={this.handleOnClickMenu.bind(this)}/>
      </div>
    );
  }
}

export default TakeOrderButtons;
