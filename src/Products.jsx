import React, { Component } from 'react';
import Product from './Product'
import { connect } from 'react-redux';
import './Products.css';
import { filterProducts } from './actions/products';

function mapStateToProps(state) {
  return {
    filteredProducts: state.products.filteredProducts
  }
}

function mapDispatchToProps(dispatch) {
    return {
        filterProducts: query => dispatch(filterProducts(query))
    }
}

class Products extends Component {
    constructor() {
        super();
        this.state = {
            orderSum: 0
        };
    }
    render() {
        // const products = [
        //     { id: 1, price: 1000, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' },
        //     { id: 2, price: 2000, description: 'Lorem ipsum dolor sit amet lorem. Integer mi metus, ullamcorper tellus et dui. Suspendisse egestas imperdiet sapien. In pede.  Curabitur et ligula.' },
        //     { id: 3, price: 500, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' },
        //     { id: 4, price: 1500, description: 'Lorem ipsum dolor sit amet lorem. Integer mi metus, ullamcorper tellus et dui. Suspendisse egestas imperdiet sapien. In pede.  Curabitur et ligula.' },
        //     { id: 5, price: 750, description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.' },
        // ];
        console.log(this.props.filteredProducts);
        const allProducts = this.props.filteredProducts;
        return (
            <div>
                <p>{this.state.orderSum}</p>
                <div className="App-content">{allProducts.map(this.renderProduct)}</div>
            </div>
        )
    }
    renderProduct = ({id, price, description}) => {
        return (
            <div key={id} className="App-product">
                <Product id={id} price={price} description={description} addToCart={this.addToCart} />
            </div>
        )        
    }
    addToCart = (price) => {
        this.setState({ orderSum: this.state.orderSum + price })
        console.log('orderSum: ', this.state.orderSum);
    }
}

// export default Products;
export default connect(mapStateToProps, mapDispatchToProps)(Products);
