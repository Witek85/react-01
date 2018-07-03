import allProducts from '../data';
import { FILTER_PRODUCTS, PRODUCTS_FETCH_REQUESTED, PRODUCTS_FETCH_SUCCEEDED } from '../constants/products';

const INITIAL_STATE = {
  error: false,
  loading: false,
  allProducts: [],
  filteredProducts: allProducts,
  query: null
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUESTED:
    console.log('PRODUCTS_FETCH_REQUESTED');
      return {
        ...state,
        loading: true,
        error: false
      };
    case PRODUCTS_FETCH_SUCCEEDED:
      return {
        ...state,
        allProducts: action.payload.products,
        filteredProducts: state.query
          ? action.payload.products.filter(product => product.title.includes(state.query))
          : action.payload.products
      }
    case FILTER_PRODUCTS:
      const {query} = action.payload;
      return {
        ...state,
        filteredProducts: state.allProducts.filter(product => product.title.includes(query)),
        query
      };
    default:
      return state
  }
};


// const products = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FILTER_PRODUCTS:
//       const { query } = action.payload;
//       return {
//         ...state,
//         filteredProducts: state.allProducts.filter(product => {
//           return product.title.includes(query);
//         })
//       };
//     default:
//       return state
//   }
// };

export default products;