import { ADD_TO_CART } from '../constants/cart';

const INITIAL_STATE = {
  total: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log('cartReducer');
  switch (action.type) {
    case ADD_TO_CART:
      const { item } = action.payload;
      console.log('ADD_TO_CART', item);
      return {
        ...state,
        total: state.total + item
      };
    default:
      return state
  }
};

export default cartReducer;
