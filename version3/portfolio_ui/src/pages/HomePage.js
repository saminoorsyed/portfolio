// import dependencies
import React from 'react';
// import components
import Landing from '../components/Landing';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';


export default function HomePage(){

    return(
        <section>
            <Landing/>
            <About/>
            <Technologies/>
            <Projects/>
        </section>
    )
};