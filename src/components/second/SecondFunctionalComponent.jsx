import React from 'react';

const SecondFunctionalComponent = (props) => {

	const dummyFunctionOne = function(e){
		console.log('dummyFunctionOne', e);
		console.log('this', this);
	}

	const dummyFunctionTwo = (e) => {
		console.log('dummyFunctionTwo', e);
		console.log('this', this);
	}

	return (
		<React.Fragment>
			<p>SecondFunctionalComponent {props.foo}</p>
			<button type="button" onClick={dummyFunctionOne}>dummyFunctionOne</button>
			<button type="button" onClick={dummyFunctionTwo}>dummyFunctionTwo</button>
		</React.Fragment>
	)
};

export default SecondFunctionalComponent;