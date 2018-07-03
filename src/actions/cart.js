import { ADD_TO_CART } from '../constants/cart';

export function addToCart(item) {
  console.log('addToCart', item);
  return {
    type: ADD_TO_CART,
    payload: { item }
  }
}
