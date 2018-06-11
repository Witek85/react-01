import React, { Component } from 'react';
import First from './First'
import './App.css';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <section>
          <div className="container">
            <First />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
