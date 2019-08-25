import React ,{Component} from 'react';
import AppStore from '../FluxStore/AppStore';
import '../styles/App.css';
import AppAction from '../FluxActions/AppAction';
import Item from './Item';
import {connect} from 'react-redux';
import * as reduxActions from '../ReduxActions/AppAction';
class App extends Component{
  state = {items:[]}
  getAppState() {
    return { items: AppStore.getAll() };
  }
  _onChange = ()=> {
    this.setState(this.getAppState());
  }
  getInitialState() {
    return this.getAppState();
  }
  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
    AppStore.register();
  }
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }
  addItem() {
    AppAction.addItem("item added on " + Date.now());
  }
  render() {
    var itemNodes = [];
    for (var item in this.state.items) {
      itemNodes.push(<Item items={this.state.items} item={item} />);
    }
    return (
      <div className="wrapper">
        <h2 onClick={this.addItem}>Click to add an Item</h2>
        {itemNodes}
      </div>
    );
  }
};

function mapStateToProps(states, ownProps){
  return {

  }
}

export default connect(mapStateToProps, reduxActions)(App);
