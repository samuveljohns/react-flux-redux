import React from 'react';
import AppStore from './AppStore';
import './App.css';
import AppAction from './AppAction'; // Unused flux action after the migration
import * as RAction from './AppReduxAction';
import { connect } from 'react-redux';
import Item from './Item';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {item:[]};
    console.log(this.props)

  }
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
  addItem = ()=>{
    //AppAction.addItem("item added on " + Date.now()); //flux action
    this.props.addItemR("item added on " + Date.now()) //redux action
  }
  render() {
    var itemNodes = [];
    console.log(this.props.items)
    for (var item in this.props.items) {
      console.log(item)
      itemNodes.push(<Item items={this.props.items} item={item} />);
    }
    return (
      <div className="wrapper">
        <h2 onClick={this.addItem}>Click to add an Item</h2>
        {itemNodes}
      </div>
    );
  }
};

function mapStateToProps(state, ownProps){
  console.log(state)
  return {
    items : state.items.items
  }
}

export default connect(mapStateToProps,RAction)(App);
