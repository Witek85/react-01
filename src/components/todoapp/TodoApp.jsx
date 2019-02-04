import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Grid, Row, Col} from 'react-bootstrap';
import { addTodo, editTodo, deleteTodo } from '../../actions/todos'

class TodoApp extends Component {

  state = {
    newTodo: ""
  }

  onChangeInputHandler = (e) => {
    this.setState({newTodo: e.target.value});
  }

  onClickHandler = () => {
    const todoId = this.props.todos.length > 0 ? this.props.todos[this.props.todos.length - 1].id + 1 : 0
    const todo = {
      id: todoId,
      text: this.state.newTodo,
      completed: false,
    }
    this.props.onAddTodo(todo);
    this.setState({newTodo: ""})
  }

  onEditHandler = (id, newTodo) => {
    this.props.onEditTodo({"id": id, "newTodo": newTodo});
  }

  onDeleteHandler = (id) => {
    this.props.onDeleteTodo(id);
  }

  render() {
    const isDisabled = this.state.newTodo === '';

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={4}>
              <FormControl
                ref={node => {this.input = node}}
                type="text"
                value={this.state.newTodo}
                placeholder="Enter todo"
                onChange={this.onChangeInputHandler}
              />
            </Col>
            <Col xs={2}>
              <Button onClick={this.onClickHandler} disabled={isDisabled}>Add Todo</Button>
            </Col>
          </Row>
        </Grid>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text} 
            <Button onClick={() => this.onEditHandler(todo.id, "edited")} >Edit</Button>
            <Button onClick={() => this.onDeleteHandler(todo.id)} >Delete</Button>
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