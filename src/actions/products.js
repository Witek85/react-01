import { FILTER_PRODUCTS } from "../constants/products";

export function filterProducts(query) {
  return {
    type: FILTER_PRODUCTS,
    payload: { query }
  }
}