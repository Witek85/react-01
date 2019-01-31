import { INCREMENT, DECREMENT, INCREMENT_WITH_PARAM } from '../constants/counter';

export const incrementCounter = (counter) => {
  return {
      type: INCREMENT, 
  }
}

export const decrementCounter = (counter) => {
  return {
      type: DECREMENT, 
  }
}

export const incrementCounterWithParam = (counter) => {
  return {
      type: INCREMENT_WITH_PARAM, 
      payload: counter
  }
}