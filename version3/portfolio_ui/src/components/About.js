import React from 'react';

export default function About() {
  return (
    <article className='about'>
        <h3>About me</h3>
        <p>I'm currently studying computer science at Oregon State University in pursuit of my second baccalaureate degree and expect to graduate in the Spring of 2024. At the moment the bulk of my time and coursework focuses on full stack web development. As I gain fluency as a software engineer, I hope to pursue projects in artificial intelligence, computer vision, virtual and augmented reality.</p>
        <p> Outside of the time that I spend studying at my desk, I enjoy a bit of creative writing, running, and fiddling around on my guitar.</p>
        <h3> Education </h3>
        <div>
          <h4>Current Oregon State coursework:</h4>
          <p> Intro to programming 1 & 2, Discrete structures, Data Structures, Algorithms, Computer Architecture, Web Development, software Engineering 1, Databases</p>
        </div>

        <div>
          <h4> Current Self Study:</h4>
          <p> The Odin Project: A self paced full stack boot camp focusing on the use of Mongo DB, Express JS, React, and NPM</p>
          <p> Readings: Fluent Python, Modern JavaScript for the impatient Relational database design and implementation, Handbook of software Engineering Methods </p>
        </div>


        <div>
          <h4>Coursework from Degree in BioPhysics at UC Berkeley (2013):</h4>
          <p> Physics 1,2&3, Biology 1&2, Chemistry 1&2, Organic Chemistry, Multi-variable calculous, Linear Algebra & differential equations, Quantum Mechanics 1, Electrodynamics, Particle Physics, Mathematical Analysis, BioPhysics, Evolution, Medical Ethno-botany, etc.</p>
        </div>
    </article>
  );
}
