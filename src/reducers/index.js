import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import todos from './todos';

export default combineReducers({
  products,
  cart,
  todos
});