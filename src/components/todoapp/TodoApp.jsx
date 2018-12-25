import React, { Component } from 'react';

// import { combineReducers, createStore } from 'redux';

// function mapStateToProps(state) {
//   console.log('state', state)
// return {
//   cartTotal: state.cart.total,
//   filteredProducts: state.products.filteredProducts
// }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchProducts: () => dispatch(fetchProducts()),
//     onAddToCart: item => dispatch(addToCart(item))
//   }
// }

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button
          // onClick={() => {
          //   store.dispatch({
          //     type: 'ADD_TODO',
          //     text: this.input.value,
          //     id: nextTodoId++,
          //   });
          //   this.input.value = '';
          // }}
        >
          Add Todo
        </button>
        <ul>
          {/* {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)} */}
        </ul>
      </div>
    );
  }
}


export default TodoApp;





// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter;
//     default:
//       return state;
//   }
// };

// const { combineReducers } = Redux;
// const todoApp = combineReducers({
//   todos,
//   visibilityFilter,
// });

// const { createStore } = Redux;
// const store = createStore(todoApp);

// const { Component } = React;

// let nextTodoId = 0;
// class TodoApp extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           ref={node => {
//             this.input = node;
//           }}
//         />
//         <button
//           onClick={() => {
//             store.dispatch({
//               type: 'ADD_TODO',
//               text: this.input.value,
//               id: nextTodoId++,
//             });
//             this.input.value = '';
//           }}
//         >
//           Add Todo
//         </button>
//         <ul>
//           {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }

// const render = () => {
//   ReactDOM.render(
//     <TodoApp todos={store.getState().todos} />,
//     document.getElementById('root')
//   );
// };

// store.subscribe(render);
// render();
