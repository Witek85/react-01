import React, { Component } from 'react';
import First from './First'
import Second from './Second'
import './App.css';
import Header from './Header';
import Products from './Products';
import ThirdParent from './Third_parent';
import Api1 from './Api1';

class App extends Component {
  constructor() {
    super();
    this.state = {
        currentPage: "Products"
    };
  }
  render() {
    return (
      <main className="App">
        <Header changePage={this.changePage} />
        {this.renderContent()}
      </main>
    );
  }
  renderContent() {
    if (this.state.currentPage === "Products") {
      return (
        <section>
        <div className="container">
          <Products />
        </div>
      </section>
      )
    } else if (this.state.currentPage === "First") {
      return (<section><div className="container"><First name="World" /></div></section>)
    } else if (this.state.currentPage === "Second") {
      return (<section><div className="container"><Second title="this is title" content="this is content" /></div></section>)
    } else if (this.state.currentPage === "ThirdParent") {
      return (<section><div className="container"><ThirdParent /></div></section>)
    } else if (this.state.currentPage === "Api1") {
      return (<section><div className="container"><Api1 /></div></section>)
    }
  }
  changePage = (page) => {
    this.setState({ currentPage: page })
    console.log('currentPage: ', page);
}
}

export default App;
