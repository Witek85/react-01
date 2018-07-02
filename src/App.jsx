import React, { Component } from 'react';
import First from './First'
import Second from './Second'
import './App.css';
import Header from './Header';
import ThirdParent from './Third_parent';
import Api1 from './Api1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <div className="container">
            <Second title="this is title" content="this is content" />
          </div>
        </section>
        <section>
          <div className="container">
            <First name="World" />
          </div>
        </section>
        <section>
          <div className="container">
            <ThirdParent />
          </div>
        </section>
        <section>
          <div className="container">
            <Api1 />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
