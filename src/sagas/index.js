import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import Api, { normalizeFirebaseResponse } from '../Api2';
import { PRODUCTS_FETCH_FAILED, PRODUCTS_FETCH_REQUESTED, PRODUCTS_FETCH_SUCCEEDED } from '../constants/products';
import { ISS_FETCH_INIT, ISS_FETCH_SUCCESS, ISS_FETCH_FAILED, GOOGLE_FETCH_INIT, GOOGLE_FETCH_SUCCESS, GOOGLE_FETCH_FAILED } from '../constants/iss';
import axios from 'axios';

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

function* fetchISS(action) {
  console.log('fetchISS', action)
  try {
    const response = yield axios.get('https://api.wheretheiss.at/v1/satellites/25544');
    yield console.log('axios', response.data);
    yield put({type: GOOGLE_FETCH_INIT, payload: response.data});
    yield put({type: ISS_FETCH_SUCCESS, payload: response.data});
  } catch (e) {
    yield put({type: ISS_FETCH_FAILED, message: e.message});
  } 
}

function* fetchGoogle(action) {
  console.log('fetchGoogle', action.payload.latitude, action.payload.longitude)
  try {
    const response = yield axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 
    action.payload.latitude + ',' + action.payload.longitude + 
    '&key=AIzaSyAI_3R5zXkHy8eZO0zw9nO1EW7bijkB78I');
    if (response.data.status !== "REQUEST_DENIED") {
      yield put({type: GOOGLE_FETCH_SUCCESS, payload: response.data});
    } else {
      yield put({type: GOOGLE_FETCH_FAILED, message: response.data.error_message});
    }
  } catch (e) {
    yield put({type: GOOGLE_FETCH_FAILED, message: e.message});
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
  yield takeLatest(ISS_FETCH_INIT, fetchISS);
  yield takeLatest(GOOGLE_FETCH_INIT, fetchGoogle);
}

export default mySaga;