import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../blog">Add An Exercise</Link>
        <Link to= "../contact"> Contact </Link>
        <Link to= "../resume"> Resume </Link>
    </nav>
  );
}

export default Navigation;
