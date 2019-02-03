import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../constants/todos';

export const addTodo = (todo) => {
  console.log('addTodo', todo);
  return {
      type: ADD_TODO, 
      payload: todo
  }
}

export const editTodo = (todo) => {
  console.log('addTodo', todo);
  return {
      type: EDIT_TODO, 
      payload: todo
  }
}

export const deleteTodo = (todo) => {
  console.log('deleteTodo', todo);
  return {
      type: DELETE_TODO, 
      payload: todo
  }
}