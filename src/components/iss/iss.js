import React, { Component } from 'react';
import { connect } from 'react-redux';
import { issInit } from '../../actions/iss';

class iss extends Component {
    componentDidMount() {
        this.props.onIssInit();
        console.log('componentDidMount', this.props.issData);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate', this.props.issData);
        console.log('issDataError', this.props.issDataError);
    }
    render() {
        return (
            <div>
                {!this.props.issDataError ? (
                    <React.Fragment>
                        <p>Current ISS latitude is: {this.props.issData.latitude}</p>
                        <p>Longitude: {this.props.issData.longitude}</p> 
                        {/* <p>Formatted address: {this.state.google.formatted_address}</p> */}
                    </React.Fragment>
                ) : <p>{this.props.issDataError}</p>}
                
                
            </div>


        )
    }
}

function mapStateToProps(state) {
    return {
        issData: state.iss.issData,
        issDataError: state.iss.issDataError,
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        onIssInit: () => dispatch(issInit()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(iss);