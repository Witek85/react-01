import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const links = [
            { url: '#', text: 'First link' },
            { url: '#', text: 'Second link' }
        ];
        return <ul className="nav navbar-nav">{links.map(this.renderLink)}</ul>; 
    }
    renderLink = ({url, text}) => {
        return <li key={text}>
            <a href={url} className="my-awesome-link" onClick={() =>this.handleClick(text)}>
                {text}
            </a>
            </li>; 
    }
    handleClick = (text) => {
        console.log('clicked link with text: ', text);
    }
}

export default Navbar;