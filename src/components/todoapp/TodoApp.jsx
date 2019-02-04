import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, FormControl, Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';
import { addTodo, editTodo, deleteTodo, toggleTodo, startEditTodo } from '../../actions/todos'

class TodoApp extends Component {

  state = {
    newTodo: "",
    editTodo: ""
  }

  onChangeInputHandler = (e) => {
    this.setState({newTodo: e.target.value});
  }

  onEditInputHandler = (e) => {
    this.setState({editTodo: e.target.value});
  }

  onClickHandler = () => {
    const todoId = this.props.todos.length > 0 ? this.props.todos[this.props.todos.length - 1].id + 1 : 0
    const todo = {
      id: todoId,
      text: this.state.newTodo,
      completed: false,
      edited: false
    }
    this.props.onAddTodo(todo);
    this.setState({newTodo: ""})
  }
  
  onStartEditHandler = (id, value) => {
    this.setState({editTodo: value});
    this.props.onStartEditTodo(id);
  }

  onToggleHandler = (id) => {
    this.props.onToggleTodo(id);
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
        <br/>
        <Row>
          <Col xs={12}>
            <ListGroup>
            {this.props.todos.map(todo => (
              <ListGroupItem key={todo.id} bsStyle={todo.completed ? "success" : null}>
                <Row>
                  <Col xs={8}>
                    {todo.edited ? 
                      <FormControl
                      ref={node => {this.input = node}}
                      type="text"
                      value={this.state.editTodo}
                      placeholder="Enter todo"
                      onChange={this.onEditInputHandler}
                      /> :
                      todo.text
                    } 
                  </Col>
                  <Col xs={4}>
                    <ButtonGroup className="pull-right">
                      <Button bsSize="small" onClick={() => this.onToggleHandler(todo.id)} ><Glyphicon glyph={todo.completed ? "star" : "star-empty"} /></Button>
                      {todo.edited ? 
                        <Button bsSize="small" onClick={() => this.onEditHandler(todo.id, this.state.editTodo)} >Save</Button> :
                        <Button bsSize="small" onClick={() => this.onStartEditHandler(todo.id, todo.text)} >Edit</Button>
                      }
                      <Button bsSize="small" onClick={() => this.onDeleteHandler(todo.id)} >Delete</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
            </ListGroup>
          </Col>
        </Row>
      </Grid>
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
    onStartEditTodo: (todo) => dispatch(startEditTodo(todo)),
    onEditTodo: (todo) => dispatch(editTodo(todo)),
    onDeleteTodo: (todo) => dispatch(deleteTodo(todo)),
    onToggleTodo: (todo) => dispatch(toggleTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);