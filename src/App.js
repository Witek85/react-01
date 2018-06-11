import React, { Component } from 'react';
import First from './first'
import './App.css';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <First />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
