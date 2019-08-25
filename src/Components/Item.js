import React, { Component } from 'react'
import AppAction from '../FluxActions/AppAction';
import {connect} from 'react-redux'
import * as reduxActions from '../ReduxActions/AppAction';

class Item extends Component{
    removeItem = ()=> {
      AppAction.removeItem(this.props.item); //Flux Action
      this.props.removeItem(this.props.item); // Redux Action
    }
    render() {
      return (
        <h4 key={this.props.item} onClick={this.removeItem}>
          {this.props.items[this.props.item]} (click to remove)
        </h4>
      );
    }
  };

  export default connect(null,reduxActions)(Item);
