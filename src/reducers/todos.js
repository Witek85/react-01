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
    case 'START_EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((content) => content.id === action.payload ? {...content, edited: true}: content)
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((content) => content.id === action.payload.id ? {...content, text: action.payload.newTodo, edited: false}: content)
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((content) => content.id === action.payload ? {...content, completed: !content.completed}: content)
      };
    default:
      return state;
  }
};

export default todos;