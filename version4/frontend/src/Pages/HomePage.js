// import dependencies
import React from 'react';
// import components
import Landing from '../components/blog/Landing'
import About from '../components/blog/About'
import Technologies from '../components/blog/Technologies'


const HomePage = () => {
  return (
        <section>
            <Landing/>
            <Technologies/>
            <About/>
        </section>
  )
}

export default HomePage;