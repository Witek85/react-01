import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
