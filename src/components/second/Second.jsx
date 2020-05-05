import React from 'react';
import SecondFunctionalComponent from './SecondFunctionalComponent';
import SecondClassComponent from './SecondClassComponent';

const Second = ({ title, content }) => {
    return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <SecondFunctionalComponent foo='bar' />
        <SecondClassComponent foo='bar' />
    </div>
    )
}

export default Second;