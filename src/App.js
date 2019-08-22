import React from 'react';
import AppStore from './AppStore';
import './App.css';
import AppAction from './AppAction';
class Item extends React.Component{
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
class App extends React.Component{
  state = {item:[]}
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

export default App;
