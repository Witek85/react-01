import React from 'react';
import { Link } from 'react-router-dom';

const courses = () => (
  <div>
    <p>courses</p>
    <Link to={{ pathname: "/course/1", state: { id: "1", title: "title 1"}}} >title 1</Link><br/>
    <Link to={{ pathname: "/course/2", state: { id: "2", title: "title 2"}}} >title 2</Link><br/>
    <Link to={{ pathname: "/course/3", state: { id: "3", title: "title 3"}}} >title 3</Link><br/>
    <Link to={{ pathname: "/course/4", state: { id: "4", title: "title 4"}}} >title 4</Link><br/>
    <Link to={{ pathname: "/course/5", state: { id: "5", title: "title 5"}}} >title 5</Link><br/>
  </div>
)

export default courses;