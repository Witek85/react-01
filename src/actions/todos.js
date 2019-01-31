import { ADD_TODO } from '../constants/todos';

export const addTodo = (todo) => {
  console.log('addTodo', todo);
  return {
      type: ADD_TODO, 
      payload: todo
  }
}