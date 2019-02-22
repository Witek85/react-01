import React from 'react';

const ProductInput = (props) => {
  return (
    <div>
      <input type="text" name="name" onChange={(e) => props.handleChange(e)} />
    </div>
  )
}

export default ProductInput;