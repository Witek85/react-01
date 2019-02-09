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
        console.log('componentDidUpdate googleData', this.props.googleData);
        console.log('issDataError', this.props.issDataError);
    }
    getFormattedAddress = () => {
        if (this.props.googleData.results && this.props.googleData.results.length > 0) {
            return this.props.googleData.results[0].formatted_address;
        }
    }
    render() {
        const formattedAddress = this.getFormattedAddress();
        return (
            <div>
                {!this.props.issDataError ? (
                    <React.Fragment>
                        <p>Current ISS latitude is: {this.props.issData.latitude}</p>
                        <p>Longitude: {this.props.issData.longitude}</p> 
                        {this.props.googleData.status === "OK" ? (
                            <p>Formatted address: {formattedAddress}</p>
                        ) : <p>No formatted address</p> }
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
        googleData: state.iss.googleData
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        onIssInit: () => dispatch(issInit()),
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(iss);