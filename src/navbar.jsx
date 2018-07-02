import React, { Component } from 'react';

class Navbar extends Component {
    render() {         
        return (
            <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        )
    }
}

export default Navbar;