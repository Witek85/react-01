import { API_URL } from './config';

const API = {
  fetchProducts: () => fetch(API_URL),
  fetchProduct: (id) => fetch(`${API_URL}/${id}`)
};

export function normalizeFirebaseResponse(response) {
  return Object.entries(response).map((entry) => ({
    ...entry[1],
    id: entry[0]
  }))
}

export default API;