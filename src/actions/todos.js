import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../constants/todos';

export const addTodo = (todo) => {
  return {
      type: ADD_TODO, 
      payload: todo
  }
}

export const editTodo = (todo) => {
  return {
      type: EDIT_TODO, 
      payload: todo
  }
}

export const deleteTodo = (todo) => {
  return {
      type: DELETE_TODO, 
      payload: todo
  }
}