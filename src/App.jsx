import React, { Component, lazy, Suspense } from 'react';
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
// import users from './components/users/users';
import courses from './components/courses/courses';
import course from './components/courses/course/course';
import iss from './components/iss/iss';
import Reduce from './components/reduce/reduce';
import { fetchProducts } from "./actions/products";

const users = lazy(() => import('./components/users/users'));

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
          <Suspense fallback={<div>loading....</div>}>
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
                  <Route path="/Users" component={users} />
                  <Route path='/course/:id' exact component={course} />
                  <Route path="/Courses" component={courses} />
                  <Route path="/iss" component={iss} />
                  <Route path="/reduce" component={Reduce} />
                  <Route render={() => <div>Sorry, page is not found</div>}/>
                </Switch>
              </div>
            </section>
          </Suspense>
        </main>
      </Router>
    );
  }
}



export default App;
