import {
  EventEmitter
} from "events";
import createFluxStore from './createFluxStore';
import appReducer from './AppReducer';
import Dispatcher from './FluxDispatcher';
var AppConstants = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
};
class AppStore extends EventEmitter {

  _items = [];
  clientsReduxStore = null;
  constructor() {
    super();
    this.clientsReduxStore = createFluxStore(appReducer);
    this._items = this.clientsReduxStore.getState();
    this.clientsReduxStore.subscribe(async function (action) {
      // eslint-disable-next-line default-case
      switch (action.actionType) {
        case 'ADD_ITEM':
          await this.create();
          break;
        case 'REMOVE_ITEM':
          await this.destroy();
          break;
      }
      // Notify of the redux-flux store change
      this.emitChange();
    }.bind(this))

  }
  getAll = function () {
    return this._items;
  };
  create = function (item) {
    var id = Date.now();
    this._items[id] = item;
  };
  destroy = function (item) {
    delete this._items[item];
  };

  emitChange = function () {
    this.emit("change");
  };

  addChangeListener = function (callback) {
    this.on("change", callback);
  };

  removeChangeListener = function (callback) {
    this.removeListener("change", callback);
  };
  register = function () {
    Dispatcher.register(function (payload) {
      var item = payload.item,
        actionType = payload.actionType;
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