import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import First from './First';
import Second from './Second';
import Header from './Header';
import Products from './Products';
import News from './News';
import ThirdParent from './Third_parent';
import Api1 from './Api1';
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
                <Route path="/ThirdParent" component={ThirdParent} />
                <Route path="/Api1" component={Api1} />
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
