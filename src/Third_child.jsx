import React, { Component } from 'react';

class ThirdChild extends Component {
    render() {
        return (
            <div>
                term {this.props.term}
            </div>
        );
    }
}

export default ThirdChild;