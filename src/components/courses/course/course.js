import React from 'react';
import { Link } from 'react-router-dom';

const course = (props) => {
  const foo = props.location.state
  console.log(foo);
  return (
    <div>
      <p><Link to="/courses">courses</Link></p>
      {foo.title}
    </div>
  )
}

export default course;