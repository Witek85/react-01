import { ADD_TO_CART } from '../constants/cart';

const INITIAL_STATE = {
  total: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log('cartReducer');
  switch (action.type) {
    case ADD_TO_CART:
      const { item } = action.payload;
      return {
        ...state,
        total: state.total + item.price
      };
    default:
      return state
  }
};

export default cartReducer;
