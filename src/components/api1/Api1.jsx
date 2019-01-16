import React, { Component } from 'react';

class Api1 extends Component {

    state = {
        movies: []
    };
    componentDidMount() {
        fetch('https://facebook.github.io/react-native/movies.json')  
        .then((response) => response.text())
        .then((responseText) => {
            console.log(responseText);
            const resText = JSON.parse(responseText);
            this.setState({movies: resText.movies})
        })
        .catch((error) => {
            console.log("reset client error-------",error);
        });     
    };
    render() {
        const movies = this.state.movies.map(key => {
            console.log(key);
            return (
                <div>{key.id} - {key.title} ({key.releaseYear})</div>
            )
        });
        return (
            <div>
                {movies}
            </div>
            )
    }

}

export default Api1;