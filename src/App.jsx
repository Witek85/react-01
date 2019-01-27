import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import First from './components/first/First';
import Second from './components/second/Second';
import Header from './components/header/Header';
import Products from './components/products/Products';
import News from './components/news/News';
import Third from './components/third/Third';
import Api1 from './components/api1/Api1';
import TodoApp from './components/todoapp/TodoApp';
import InputOutput from './components/inputOutput/inputOutput';
import Lists from './components/lists/lists';
import { fetchProducts } from "./actions/products";

class App extends Component {
  constructor() {
    super();
    this.state = {
        currentPage: ""
    };
  }
  render() {
    return (
      <Router>
        <main className="App">
          <Header/>
          <section>
            <div className="container">
              <Switch>
                {/* <Redirect exact from="/" to="/Products"/> */}
                <Route path="/" exact component={Products} />
                <Route path="/News" component={News}/>
                <Route path="/First" render={(props) => <First {...props} name="World" /> } />
                <Route path="/Second" render={(props) => <Second {...props} title="this is title" content="this is content" /> } />
                <Route path="/Third" component={Third} />
                <Route path="/Api1" component={Api1} />
                <Route path="/TodoApp" component={TodoApp} />
                <Route path="/InputOutput" component={InputOutput} />
                <Route path="/Lists" component={Lists} />
                <Route render={() => <div>Sorry, page is not found</div>}/>
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}



export default App;
