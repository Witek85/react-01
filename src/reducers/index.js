import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import todos from './todos';
import counter from './counter';
import iss from './iss';

export default combineReducers({
  products,
  cart,
  todos,
  counter,
  iss
});