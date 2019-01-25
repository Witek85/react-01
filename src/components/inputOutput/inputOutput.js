import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class InputOutput extends Component {
  state = {
    username: "user"
  }
  onChangeParent = (e, f) => {
    console.log(e);
    console.log(f);
    e.preventDefault();
    this.setState({username: f})
  }
  render() {
    return (
      <div className="App">
      <UserInput onChangeChild={this.onChangeParent} />
      <UserOutput user={this.state.username} />
      <UserOutput user="werewre" />
      <UserOutput user="werewrewr" />
        <ol>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      </div>
    );
  }
}

export default InputOutput;
