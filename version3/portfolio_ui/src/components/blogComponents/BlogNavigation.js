import React from 'react';
import { Link } from 'react-router-dom';

function BlogNavigation() {
  return (
    <nav>
        <Link to="/blog/all"> All </Link>
        <Link to="blog/blogAlgorithms"> Algorithms </Link>
        <Link to="blog/blogProjects"> Projects </Link>
        <Link to= "blog/blogExtras"> Extras </Link>
    </nav>
  );
}

export default BlogNavigation;