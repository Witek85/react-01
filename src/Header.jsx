import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Welcome to React</a>
                </div>
                    <Navbar />
                </div>
          </nav>
        );
    }
}

export default Header;