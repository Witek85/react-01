import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { incrementCounter, decrementCounter, incrementCounterWithParam } from '../../actions/counter';

const users = (props) => {
  const onIncrementHandler = () => {
    props.onIncrement();
  }
  const onDecrementHandler = () => {
    props.onDecrement();
  }
  const onIncrementWithParamHandler = () => {
    props.onIncrementWithParam(10);
  }
  return (
  <div>
    {props.counter}<br/>
    <Button onClick={onIncrementHandler} >+1</Button>
    <Button onClick={onDecrementHandler} >-1</Button>
    <Button onClick={onIncrementWithParamHandler} >+10</Button>
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
    onDecrement: () => dispatch(decrementCounter()),
    onIncrementWithParam: (props) => dispatch(incrementCounterWithParam(props)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(users);