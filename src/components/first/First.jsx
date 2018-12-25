import React, { Component } from 'react';
import './First.css';

class First extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            text: "not clicked",
            firstName: "1",
            lastName: "2",
        };
    }
    render() {
        return (
            <div className="First-intro">
                Hello {this.props.name} ! To get started, edit <code>src/App.js</code> and save to reload.
                <button className="btn btn-default" onClick={this.onClickHandler}>Click!</button>;
                <p>{this.state.counter}</p>
                <p>{this.state.text}</p>
                <form className="form-inline" action="/action_page.php">
                    <div className="form-group">
                        <label htmlFor="firstName">Imię</label>
                        <input type="text" className="form-control" id="firstName" defaultValue={this.state.firstName} onInput={this.changeFirstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Imię</label>
                        <input type="text" className="form-control" id="lastName" defaultValue={this.state.lastName} onInput={this.changeLastName} />
                    </div>
                </form>
                <output>{this.state.firstName}&nbsp;{this.state.lastName}</output>
            </div>
        );
    }
    onClickHandler = () => {
        console.log("click!");
        this.setState({
            counter: this.state.counter + 1,
            text: "clicked!"
          })
    }
    changeFirstName = (e) => {
        this.setState({firstName: e.target.value});
    }
    changeLastName = (e) => {
        this.setState({lastName: e.target.value});
    }
    
}

export default First;