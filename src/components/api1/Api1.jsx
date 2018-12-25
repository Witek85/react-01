import React, { Component } from 'react';

class Api1 extends Component {

    state = {
        contacts: []
    };
    
    componentDidMount() {
        fetch('https://facebook.github.io/react-native/movies.json')  
        .then((response) => response.text())
        .then((responseText) => {
            console.log(JSON.parse(responseText));
        })
        .catch((error) => {
            console.log("reset client error-------",error);
        });     
    };


    render() {
        return (
            <div>
            API1
            </div>
            )
    }

}

export default Api1;