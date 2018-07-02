import React, { Component } from 'react';

class Navbar extends Component {
    render() {         
        return (
            <div lassName="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;