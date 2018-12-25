import React, { Component } from 'react';
import Product from './Product'
import { connect } from 'react-redux';
import './Products.css';
// import { filterProducts } from './actions/products';
import { fetchProducts } from "../../actions/products";
import { addToCart } from "../../actions/cart";

function mapStateToProps(state) {
    console.log('state', state)
  return {
    cartTotal: state.cart.total,
    filteredProducts: state.products.filteredProducts
  }
}

function mapDispatchToProps(dispatch) {
    return {
      fetchProducts: () => dispatch(fetchProducts()),
      onAddToCart: item => dispatch(addToCart(item))
    }
}

class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
      }

    // constructor() {
    //     super();
    //     this.state = {
    //         orderSum: 0
    //     };
    // }
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
                <p>{this.props.cartTotal}</p>
                <div className="App-content">{allProducts.map(this.renderProduct)}</div>
            </div>
        )
    }
    renderProduct = ({id, price, description}) => {
        const handleAddToCart = (newItem) => {
            console.log('handle add', newItem);
            this.props.onAddToCart(newItem);
        }
        
        return (
            <div key={id} className="App-product">
                <Product id={id} price={price} description={description} onAddToCart={handleAddToCart} />
            </div>
        )        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);