import React, { Component } from 'react';
import ThirdChild from './Third_child';

class Third extends Component {
    constructor() {
        super();
        this.state = {
            term: ""
        };
    }
    changeTerm = (e) => {
        this.setState({term: e.target.value});
    }
    callbackParent = (childData) => {
        console.log('childData', childData);
    }
    render() {
        return (
            <div>
                <form className="form-inline" action="/action_page.php">
                    <div className="form-group">
                        <label htmlFor="term">Term</label>
                        <input type="text" className="form-control" id="term" defaultValue={this.state.term} onInput={this.changeTerm} />
                    </div>
                </form>
                <ThirdChild callbackChild={this.callbackParent} term={this.state.term} />
            </div>
        );
    }    
}

export default Third;