import React, { Component } from 'react';

class Navbar extends Component {
    render() {         
        return React.createElement('ul', {className: 'app-menu nav navbar-nav'}, [
            React.createElement('li', {className: 'app-menu_item'}, [
            React.createElement('a', {href: 'https://someurl'}, ['First link'])
            ]),
            React.createElement('li', {className: 'app-menu_item'}, [
            React.createElement('a', {href: 'https://someurl'}, ['Second link'])
            ])
        ]);   
    }
}

export default Navbar;

// return (
//     React.createElement('ul', {})
//                     <div id="navbar" className="navbar-collapse collapse">
//             <ul className="nav navbar-nav">
//             <li className="active"><a href="#">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#contact">Contact</a></li>
//             </ul>
//         </div>
// );