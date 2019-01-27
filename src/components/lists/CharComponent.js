import React from 'react';

import './CharComponent.css'

const CharComponent = ( props ) => {

  return (
    <div className="CharComponent" onClick={() => props.onClicked(props.index)}>
      {props.letter}
    </div>
  )
}

export default CharComponent;
