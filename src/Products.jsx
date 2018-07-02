import React, { Component } from 'react';
import Product from './Product'
import './Products.css';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            orderSum: 0
        };
    }
    render() {
        const products = [
            { id: 1, price: 1000, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' },
            { id: 2, price: 2000, description: 'Lorem ipsum dolor sit amet lorem. Integer mi metus, ullamcorper tellus et dui. Suspendisse egestas imperdiet sapien. In pede.  Curabitur et ligula.' },
            { id: 3, price: 500, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' },
            { id: 4, price: 1500, description: 'Lorem ipsum dolor sit amet lorem. Integer mi metus, ullamcorper tellus et dui. Suspendisse egestas imperdiet sapien. In pede.  Curabitur et ligula.' },
            { id: 5, price: 750, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' },
        ];
        return <div className="App-content">{products.map(this.renderProduct)}</div>; 
    }
    renderProduct = ({id, price, description}) => {
        return <div className="App-product">
                    <Product id={id} price={price} description={description} addToCart={this.addToCart} />
                </div>; 
    }
    addToCart = (price) => {
        this.setState({ orderSum: this.state.orderSum + price })
        console.log('orderSum: ', this.state.orderSum);
    }
}

export default Products;