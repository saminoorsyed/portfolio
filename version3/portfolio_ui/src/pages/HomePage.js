// import dependencies
import React from 'react';
// import components
import Landing from '../components/Landing';
import About from '../components/About';
import Technologies from '../components/Technologies';

export default function HomePage(){
    return(
        <section>
            <Landing/>
            <About/>
            <Technologies/>
        </section>
    )
};