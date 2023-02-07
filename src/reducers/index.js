import { combineReducers } from 'redux'


import empReducer from './empReducer.js'
import studentReducer from './studentReducer.js'
import userReducer from './userReducer.js'

var rootReducer = combineReducers({
    empReducer,userReducer,studentReducer
});
export default rootReducer;