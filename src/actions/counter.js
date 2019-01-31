import { INCREMENT } from '../constants/counter';

export const incrementCounter = (counter) => {
  console.log('increment', counter);
  return {
      type: INCREMENT, 
  }
}