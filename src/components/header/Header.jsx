import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const links = [
            { url: '#', text: 'Products', page:'' },
            { url: '#', text: 'News', page:'News' },
            { url: '#', text: 'First', page:'First' },
            { url: '#', text: 'Second', page:'Second' },
            { url: '#', text: 'Third', page:'Third' },
            { url: '#', text: 'Api1', page:'Api1' },
            { url: '#', text: 'TodoApp', page:'TodoApp' },
            { url: '#', text: 'InputOutput', page:'/InputOutput' },
            { url: '#', text: 'Lists', page:'/Lists' },
            { url: '#', text: 'Users', page:'/users' },
            { url: '#', text: 'Courses', page:'/courses' },
            { url: '#', text: 'ISS', page:'/iss' }
        ];
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
                        <Link to="/" className="navbar-brand">Home</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">{links.map(this.renderLink)}</ul>
                    </div>
                </div>
            </nav>
        ) 
    }
    renderLink = ({url, text, page}) => {
        return (
            <li key={text}>
                <Link to={page}>{text}</Link>
            </li>
        )
    }
    // handleClick = (text) => {
    //     console.log('clicked link with text: ', text);
    // }
}

export default Header;

// onClick={() =>this.handleClick(text)}

// <a href={url} className="my-awesome-link" onClick={()=>this.props.changePage(page)} >
//                 {text}
//             </a>