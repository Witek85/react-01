import { FILTER_PRODUCTS, PRODUCTS_FETCH_REQUESTED } from '../constants/products';

export function filterProducts(query) {
  return {
    type: FILTER_PRODUCTS,
    payload: { query }
  }
}

export function fetchProducts() {
    return {
      type: PRODUCTS_FETCH_REQUESTED
    };
   }