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
                <div className="artContainer">
                    <article className='articles'>
                        <Routes>
                            <Route index element={<AllArticles/>} />
                            <Route path ="/blog" element = {<AllArticles/>}/>
                            <Route path ="/blog/blogAlgorithms" element = {<Algorithms/>}/>
                            <Route path ="/blog/blogProjects" element = {<Projects/>}/>
                            <Route path = "/blog/blogExtras" element = {<Extras/>}/>
                            <Route path ="/blog/blogAll" element = {<AllArticles/>}/>
                        </Routes>
                    </article>
                    <form className='blogSearch'>
                        <fieldset>
                        <label htmlFor="search">Find a blog quickly by searching key terms here!</label>
                        <input
                            type="text" 
                            id="search" 
                            placeholder='ex: react-router-dom'/>
                        </fieldset>

                        <fieldset>
                            <legend>Advanced Options</legend>
                        <ul>
                            <li>
                                
                                <label htmlFor='title'>
                                    <input
                                        type="checkbox"
                                        id = 'title'/>
                                    Title
                                </label>
                            </li>
                            <li>
                                <label htmlFor="text">
                                <input
                                    type="checkbox"
                                    id = "text"/>
                                    Text
                                </label>
                            </li>
                            <li>
                                <label htmlFor="algorithms">
                                <input
                                    type="checkbox"
                                    id = "algorithms"/>
                                    Algorithms
                                </label>
                            </li>
                            <li>
                                <label htmlFor = "projects">
                                <input
                                    type="checkbox"
                                    id = "projects"/>
                                    Projects
                                </label>
                            </li>
                            <li>
                                <label htmlFor = "extras">
                                <input
                                    type="checkbox"
                                    id = "Extras"/>
                                    Extras
                                </label>
                            </li>
                        </ul>
                        </fieldset>
                    </form>
                </div>
            </article>
        </section>
  );
}