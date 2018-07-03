import allProducts from '../data';
import { FILTER_PRODUCTS } from '../constants/products';

const INITIAL_STATE = {
  allProducts,
  filteredProducts: allProducts
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      const { query } = action.payload;
      return {
        ...state,
        filteredProducts: state.allProducts.filter(product => {
          return product.title.includes(query);
        })
      };
    default:
      return state
  }
};

export default products;