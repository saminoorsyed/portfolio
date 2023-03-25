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
        <section style={{gap:"0px"}}>
            <h1 style={{fontSize: "2.5rem"}}>
                The Blog
            </h1>
            <article>
              <BlogNavigation/>
                <div className="blogContainer">
                    <article className='blog'>
                        <Routes>
                            <Route index element={<AllArticles/>} />
                            <Route path ="/blog" element = {<AllArticles/>}/>
                            <Route path ="blog/blogAlgorithms" element = {<Algorithms/>}/>
                            <Route path ="blog/blogProjects" element = {<Projects/>}/>
                            <Route path ="blog/blogExtras" element = {<Extras/>}/>
                            <Route path ="blog/blogAll" element = {<AllArticles/>}/>
                        </Routes>
                    </article>
                </div>
            </article>
        </section>
  );
}