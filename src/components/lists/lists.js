import React, { Component } from 'react';

import Validation from './Validation';
import CharComponent from './CharComponent';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  clickHandler = (index) => {
    let stateTab = this.state.value.split("");
    stateTab.splice(index,1);
    let stateTabJoin = stateTab.join("");
    this.setState({value: stateTabJoin }) 
  }
  render() {
    const valueSplit = this.state.value.split("");
    const boxes = valueSplit.map((valueSplit, index) => {
      console.log('valueSplit', valueSplit);
      return <CharComponent letter={valueSplit} index={index} onClicked={this.clickHandler}/>
    })
    return (
      <div className="App">
      <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
      <p>{this.state.value.length}</p>
      <Validation val={this.state.value.length}/>
      {boxes}
        {/* <ol> */}
          {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li> */}
          {/* <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li> */}
          {/* <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li> */}
          {/* <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li> */}
          {/* <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li> */}
          {/* <li>When you click a CharComponent, it should be removed from the entered text.</li> */}
        {/* </ol> */}
        {/* <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}
      </div>
    );
  }
}

export default Lists;
