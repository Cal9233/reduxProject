import { createStore } from 'redux';
import rootReducer from './Reducer/rootReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));
//console.log(store);
export default store;