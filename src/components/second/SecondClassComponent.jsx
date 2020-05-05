import React, {Component} from 'react';

class SecondClassComponent extends React.Component{

	constructor(props) {
		super(props);
		this.dummyFunctionOne = this.dummyFunctionOne.bind(this)
	}

	dummyFunctionOne(e) {
		console.log('dummyFunctionOne', e)
		console.log('this', this)
	}

	dummyFunctionTwo = (e) => {
		console.log('dummyFunctionTwo', e)
		console.log('this', this)
	}

	render() {
		return (
			<React.Fragment>
				<p>SecondClassComponent {this.props.foo}</p>
				<button type="button" onClick={this.dummyFunctionOne}>dummyFunctionOne</button>
				<button type="button" onClick={this.dummyFunctionTwo}>dummyFunctionOne</button>
			</React.Fragment>
		)
	}
} 

export default SecondClassComponent;