import { EventEmitter } from "events";
import Dispatcher from '../FluxActions/FluxDispatcher'
var AppConstants = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
};
class AppStore extends EventEmitter{
  _items = [];
  constructor() {
    super();
    this._items = [];
  }
  getAll = function() {
      return this._items;
  };
  create = function(item) {
      this._items = [...this._items,item];
  };
  destroy = function(item) {
    delete this._items[item];
  };

  emitChange = function() {
    this.emit("change");
  };

  addChangeListener = function(callback) {
    this.on("change", callback);
  };

  removeChangeListener = function(callback) {
    this.removeListener("change", callback);
  };
  register = function(){
    Dispatcher.register(function(payload) {
      var item = payload.item, actionType = payload.actionType;
      switch (actionType) {
        case AppConstants.ADD_ITEM:
          this.create(item);
          break;
        case AppConstants.REMOVE_ITEM:
          this.destroy(item);
          break;
        default:
          return true;
      }
      this.emitChange();
      return true;
    }.bind(this))
  }
}
export default new AppStore();