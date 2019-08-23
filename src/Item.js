import React, { Component } from 'react'
import AppAction from './AppAction';

class Item extends Component{
    removeItem = ()=> {
      AppAction.removeItem(this.props.item);
    }
    render() {
      return (
        <h4 key={this.props.item} onClick={this.removeItem}>
          {this.props.items[this.props.item]} (click to remove)
        </h4>
      );
    }
  };

  export default Item;
