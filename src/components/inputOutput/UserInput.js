import React, {Component} from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  render () {
    return (
      <form onSubmit={(event) => this.props.onChangeChild(event, this.state.value)}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default UserInput;
