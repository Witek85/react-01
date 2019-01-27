import React from 'react';

const Validation = ( props ) => {

  return (
    <div>
      {props.val > 5 ?
        <p>long enough</p>:
        <p>too short</p>  }
    </div>
  )
}

export default Validation;
