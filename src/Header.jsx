import React, { Component } from 'react';

class Header extends Component {
    render() {
        const links = [
            { url: '#', text: 'Products', page:'Products' },
            { url: '#', text: 'First', page:'First' },
            { url: '#', text: 'Second', page:'Second' },
            { url: '#', text: 'ThirdParent', page:'ThirdParent' },
            { url: '#', text: 'Api1', page:'Api1' }
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
                    <a className="navbar-brand" href="#">Welcome to React</a>
                </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">{links.map(this.renderLink)}</ul>
                    </div>
                </div>
          </nav>
        ) 
    }
    renderLink = ({url, text, page}) => {
        return <li key={text}>
            <a href={url} className="my-awesome-link" onClick={()=>this.props.changePage(page)} >
                {text}
            </a>
            </li>; 
    }
    // handleClick = (text) => {
    //     console.log('clicked link with text: ', text);
    // }
}

export default Header;

// onClick={() =>this.handleClick(text)}