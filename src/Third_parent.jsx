import React, { Component } from 'react';
import ThirdChild from './Third_child';

class ThirdParent extends Component {
    constructor() {
        super();
        this.state = {
            term: ""
        };
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
                <ThirdChild term={this.state.term} />
            </div>
        );
    }
    changeTerm = (e) => {
        this.setState({term: e.target.value});
    }
    
}

export default ThirdParent;