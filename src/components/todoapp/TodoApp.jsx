import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos'

          // onClick={() => {
          //   store.dispatch({
          //     type: 'ADD_TODO',
          //     text: this.input.value,
          //     id: nextTodoId++,
          //   });
          //   this.input.value = '';
          // }}


let nextTodoId = 0;
class TodoApp extends Component {

  onClickHandler = () => {
    this.props.onAddTodo();
  }

  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button onClick={this.onClickHandler} >Add Todo</button>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    todos: state.todos.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: () => dispatch(addTodo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);