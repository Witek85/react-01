import React, { Component } from 'react';
import './First.css';

class First extends Component {
    render() {
        return (
            <p className="First-intro">
                Hello {this.props.name} ! To get started, edit <code>src/App.js</code> and save to reload.
                <button className="btn btn-default" onClick={this.onClickHandler}>Click!</button>;
            </p>
        );
    }
    onClickHandler() {
        console.log("click!");
    }
}

export default First;