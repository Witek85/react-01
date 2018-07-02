import React, { Component } from 'react';

class News extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        const news = [
            { id: 1, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' },
            { id: 2, description: 'Lorem ipsum dolor sit amet lorem. Integer mi metus, ullamcorper tellus et dui. Suspendisse egestas imperdiet sapien. In pede.  Curabitur et ligula.' },
            { id: 3, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' }
       ];
        return (
            <div>
                <div className="App-content">{news.map(this.renderNews)}</div>
            </div>
        )
    }
    renderNews = ({id, description}) => {
        return (
            <div key={id} className="App-product">
                <p>{description}</p>
                <button className="btn btn-default" >Read More</button>
            </div>
        )        
    }
}

export default News;