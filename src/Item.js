
import React from 'react';
import { connect } from 'react-redux';
import AppAction from './AppAction';
import  * as RAction from './AppReduxAction';

class Item extends React.Component{
    removeItem = ()=> {
      //AppAction.removeItem(this.props.item);
      console.log(this.props.item)
      this.props.remoteItemR(this.props.item);
    }
    render() {
      console.log(this.props)
      return (
        <h4 key={this.props.item} onClick={this.removeItem}>
          {this.props.items[this.props.item]} (click to remove)
        </h4>
      );
    }
  };

  function mapStateToProps(state, ownProps){
    console.log(state)
    return {
      items : state.items.items
    }
  }
  
export default connect(mapStateToProps,RAction)(Item);