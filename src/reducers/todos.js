const initialState = {
  todos: [{
    id: 1,
    text: 'action.text',
    completed: false,
  },
  {
    id: 2,
    text: 'action.text 2',
    completed: false,
  }]
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [{
          id: 1,
          text: 'test',
          completed: false,
        }]

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