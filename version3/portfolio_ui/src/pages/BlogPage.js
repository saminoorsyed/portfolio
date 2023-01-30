// import dependencies
import React from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
// import components
import BlogNavigation from '../components/blogComponents/BlogNavigation';
import Algorithms from '../components/blogComponents/BlogAlgorithms';
import Projects from '../components/blogComponents/BlogProjects';
import Extras from '../components/blogComponents/BlogExtras';
import AllArticles from '../components/blogComponents/BlogAll';

export default function BlogPage(){
    return(
        <section>
            <h1>
                The Blog
            </h1>
            <BlogNavigation/>
            <article>
                <Routes>
                    <Route index element={<AllArticles/>} />
                    <Route path ="/blog/all" element = {<AllArticles/>}/>
                    <Route path ="/blog/blogAlgorithms" element = {<Algorithms/>}/>
                    <Route path ="/blog/blogProjects" element = {<Projects/>}/>
                    <Route path = "/blog/blogExtras" element = {<Extras/>}/>
                </Routes>
            </article>
        </section>
  );
}