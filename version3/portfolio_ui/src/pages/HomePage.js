// import dependencies
import React from 'react';
// import hooks
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import components
import Landing from '../components/Landing';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';


export default function HomePage(){
    // use State to bring in data
    const [tech, setTech] = useState([]);

    // RETRIEVE the list of tech skills
    const loadTech = async() => {
        const response = await fetch('/tech');
        const tech = await response.json();
        setTech(tech)
    }
    // use Effect to bring in data on Load
    useEffect(()=> {
        loadTech();
    },[])
    return(
        <section>
            <Landing/>
            <About/>
            <Technologies
                tech = {tech}/>
            <Projects/>
        </section>
    )
};