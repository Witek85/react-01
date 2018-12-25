import React, { Component } from 'react';

class ThirdChild extends Component {

    constructor(props) {
        super();
        this.state = {
        };
        console.log(props);
    }

    onClickHandler = () => {
        this.props.callbackChild('param from child');
    }

    render() {
        return (
            <div>
                term {this.props.term}
                <button className="btn btn-default" onClick={this.onClickHandler}>Click!</button>
            </div>
        );
    }
}

export default ThirdChild;