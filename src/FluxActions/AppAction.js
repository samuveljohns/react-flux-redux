
import Dispatcher from './FluxDispatcher'
var AppConstants = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM'
  };
class AppAction {
    addItem(item) {
        Dispatcher.dispatch({
        actionType: AppConstants.ADD_ITEM,
        item: item
        });
    }
    removeItem(item) {
        Dispatcher.dispatch({
        actionType: AppConstants.REMOVE_ITEM,
        item: item
        })
    }
}
export default new AppAction();
