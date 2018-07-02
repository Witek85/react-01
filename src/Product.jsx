import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="product">
                <p>Id: {this.props.id}</p>
                <p>Price: {this.props.price}</p>
                <p>{this.props.description}</p>
                <button className="btn btn-default" onClick={()=>this.props.addToCart(this.props.price)}>Add</button>
            </div>
        );
    }
}

export default Product;

