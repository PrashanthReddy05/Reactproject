import { legacy_createStore,applyMiddleware} from "redux";
import rootReducer from "./../reducers/index.js";
import promiseMiddleware from'redux-promise'


var store = legacy_createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default store;
