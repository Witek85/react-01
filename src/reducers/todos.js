const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((content, i) => i === action.payload.id ? {...content, text: action.payload.newTodo}: content)
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [...state, todo(undefined, action)];
//     case 'TOGGLE_TODO':
//       return state.map(t => todo(t, action));
//     default:
//       return state;
//   }
// };

export default todos;