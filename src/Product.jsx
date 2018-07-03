import React, { Component } from 'react';

class Product extends Component {
    render() {
        // const { title, description, price } = this.props.item;
        const handleCardButtonClick = () => this.props.onAddToCart(this.props.price);
        return (
            <div className="product">
                <p>Id: {this.props.id}</p>
                <p>Price: {this.props.price}</p>
                <p>{this.props.description}</p>
                <button className="btn btn-default" onClick={handleCardButtonClick}>Add</button>
            </div>
        );
    }
}

export default Product;

