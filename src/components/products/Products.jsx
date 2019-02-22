import React, { Component } from 'react';
import Product from './Product'
import ProductInput from './ProductInput'
import { connect } from 'react-redux';
import './Products.css';
import { fetchProducts, filterProducts } from "../../actions/products";
import { addToCart } from "../../actions/cart";
import { Grid, Row, Col } from 'react-bootstrap';


class Products extends Component {

    componentDidMount() {
      this.props.fetchProducts();
      console.log(this.props.filteredProducts)
    }
    onChangeHandler = (e) => {
      this.props.filterProducts(e.target.value);
    }
    render() {
        console.log(this.props.filteredProducts);
        const allProducts = this.props.filteredProducts;
        return (
          <Grid>
            <Row>
              <Col xs={4}>
                <p>Price: {this.props.cartTotal}</p>
                <ProductInput handleChange={this.onChangeHandler} />
              </Col>
            </Row>
            <Row>
              <div className="App-content">{allProducts.map(this.renderProduct)}</div>
            </Row>
          </Grid>
        )
    }
    renderProduct = ({title, id, price, description}) => {
        const handleAddToCart = (newItem) => {
            console.log('handle add', newItem);
            this.props.onAddToCart(newItem);
        }
        
        return (
            <div key={id} className="App-product">
                <Product title={title} id={id} price={price} description={description} onAddToCart={handleAddToCart} />
            </div>
        )        
    }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    cartTotal: state.cart.total,
    filteredProducts: state.products.filteredProducts
  }
}

function mapDispatchToProps(dispatch) {
  console.log('dispatch', dispatch)
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    filterProducts: (value) => dispatch(filterProducts(value)),
    onAddToCart: item => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);