import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <Link to="/"> Home </Link>
        <Link to="../blog"> Blog </Link>
        <Link to= "../projects"> Projects </Link>
        <Link to= "../contact"> Contact </Link>
    </nav>
  );
}

export default Navigation;
