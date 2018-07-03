import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api, { normalizeFirebaseResponse } from '../Api2';
import { PRODUCTS_FETCH_FAILED, PRODUCTS_FETCH_REQUESTED, PRODUCTS_FETCH_SUCCEEDED } from '../constants/products';

// worker Saga: will be fired on PRODUCTS_FETCH_REQUESTED actions
function* fetchProducts(action) {
  try {
    const response = yield call(Api.fetchProducts);
    const json = yield response.json();
    const products = normalizeFirebaseResponse(json);
    yield put({ type: PRODUCTS_FETCH_SUCCEEDED, payload: { products } });
  } catch (e) {
    yield put({type: PRODUCTS_FETCH_FAILED, message: e.message});
  }
}

function* fetchProductDetails(action) {
  // just an example to show that action.payload is available here as well as in reducer
  try {
    const products = yield call(Api.fetchProduct, action.payload.productsId);
    yield put({type: PRODUCTS_FETCH_SUCCEEDED, products: products});
  } catch (e) {
    yield put({type: PRODUCTS_FETCH_FAILED, message: e.message});
  }
}

/*
  Starts fetchProduct on each dispatched `PRODUCTS_FETCH_REQUESTED` action.
  Allows concurrent fetches of products.
*/
// function* mySaga() {
//   yield takeEvery(PRODUCTS_FETCH_REQUESTED, fetchProducts);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of products. If 'PRODUCTS_FETCH_REQUESTED' gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(PRODUCTS_FETCH_REQUESTED, fetchProducts);
}

export default mySaga;