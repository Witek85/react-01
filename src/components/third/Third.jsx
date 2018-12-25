import React, { Component } from 'react';
import ThirdChild from './Third_child';
import ThirdChildZwei from './Third_child_zwei';

class Third extends Component {
    constructor() {
        super();
        this.state = {
            term: "",
            sibling: ""
        };
    }
    changeTerm = (e) => {
        this.setState({term: e.target.value});
    }
    callbackParent = (childData) => {
        console.log('childData', childData);
        this.setState({sibling: childData});
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
                <ThirdChildZwei sibling={this.state.sibling} />
            </div>
        );
    }    
}

export default Third;