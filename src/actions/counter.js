import { INCREMENT, DECREMENT } from '../constants/counter';

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