import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos'

let nextTodoId = 0;
class TodoApp extends Component {

  onClickHandler = () => {
    const todo = {
      id: 1,
      text: 'todo',
      completed: false,
    }
    this.props.onAddTodo(todo);
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
    onAddTodo: (todo) => dispatch(addTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);