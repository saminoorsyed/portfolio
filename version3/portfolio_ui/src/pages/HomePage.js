// import dependencies
import React from 'react';
// import components
import Landing from '../components/Landing';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


export default function HomePage(){

    return(
        <>
            <article><Landing/></article>
            <article><About/></article>
            <article><Skills/></article>
            <article><Projects/></article>
        </>
    )
};