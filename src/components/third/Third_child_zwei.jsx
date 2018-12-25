import React, { Component } from 'react';

class ThirdChildZwei extends Component {

    constructor(props) {
        super();
        console.log(props);
    }

    render() {
        return (
            <div>
                sibling {this.props.sibling}
            </div>
        );
    }
}

export default ThirdChildZwei;