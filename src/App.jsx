import React, { Component } from 'react';
import First from './First'
import Second from './Second'
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
        <section>
          <div className="container">
            <Second title="this is title" content="this is content" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
