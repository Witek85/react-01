import React, { Component } from 'react';
import './First.css';

class First extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            text: "not clicked"
        };
    }
    render() {
        return (
            <p className="First-intro">
                Hello {this.props.name} ! To get started, edit <code>src/App.js</code> and save to reload.
                <button className="btn btn-default" onClick={this.onClickHandler}>Click!</button>;
                <p>{this.state.counter}</p>
                <p>{this.state.text}</p>
            </p>
        );
    }
    onClickHandler = () => {
        console.log("click!");
        this.setState({
            counter: this.state.counter + 1,
            text: "clicked!"
          })
    }
    
}

export default First;