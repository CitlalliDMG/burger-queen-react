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
    const newOrder = this.state.order.concat({[name]: price});
    this.setState({order: newOrder})
    // console.log(name);
    // console.log(price);

  }

  selectMenu = (key, allItems) => {
    console.log(key);
    const menuSelectedItems = allItems.filter(item => {
      return item.category === key;
    });
    this.setState({menu: menuSelectedItems})
  };

  render() {
    console.log(this.props.data);
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
        <MenuDisplay menu={this.state.menu} onClick={this.handleOnClickMenu}/>
      </div>
    );
  }
}

export default TakeOrderButtons;
