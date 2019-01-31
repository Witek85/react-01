import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { incrementCounter } from '../../actions/counter';

const users = (props) => {
  const onIncrementHandler = () => {
    props.onIncrement();
  }
  return (
  <div>
    {props.counter}<br/>
    <Button onClick={onIncrementHandler} >+1</Button>
  </div>
  )
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    counter: state.counter.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(incrementCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(users);