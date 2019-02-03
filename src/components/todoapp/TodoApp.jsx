import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../../actions/todos'

let nextTodoId = 0;
class TodoApp extends Component {

  state = {

  }

  onClickHandler = () => {
    
    const todoId = this.props.todos.length > 0 ? this.props.todos[this.props.todos.length - 1].id + 1 : 1
    const todo = {
      id: todoId,
      text: 'todo',
      completed: false,
    }
    this.props.onAddTodo(todo);
  }

  onEditHandler = (id) => {
    console.log('onEditHandler', id);
    this.props.onEditTodo(id);
  }

  onDeleteHandler = (id
    ) => {
    console.log('onDeleteHandler', id);
    this.props.onDeleteTodo(id);
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
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text} 
            <button onClick={() => this.onEditHandler(todo.id)} >Edit</button>
            <button onClick={() => this.onDeleteHandler(todo.id)} >Delete</button>
            </li>
          ))}
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
    onEditTodo: (todo) => dispatch(editTodo(todo)),
    onDeleteTodo: (todo) => dispatch(deleteTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);