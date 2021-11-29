import { createStore, combineReducers } from 'redux';
import { todoReducer } from './Reducer/todo';
import { filterReducer } from './Reducer/filter';

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer
});

const store = createStore(rootReducer);

export default store;