import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const links = [
            { url: 'https://someurl.com', text: 'First link' },
            { url: 'https://someurl.com', text: 'Second link' }
        ];
        return <ul className="nav navbar-nav">{links.map(this.renderLink)}</ul>; 
    }
    renderLink({url, text}) {
        return <li><a href={url} className="my-awesome-link">{text}</a></li>; 
    }
}

export default Navbar;