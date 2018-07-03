const allProducts = [1, 2, 3, 4, 5].map(item => ({
    title: `Item No ${item}`,
    price: 30 + item * 5
  }));
  
  export default allProducts;