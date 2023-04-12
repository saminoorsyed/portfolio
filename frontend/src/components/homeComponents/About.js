import React from "react";

export default function About() {
  return (
    <article className="about">
      <h2>About me</h2>
      <p>
        I currently live in Brooklyn, New York and spend my time studying
        computer science online at Oregon State University while working on a
        few personal projects like this website.
      </p>
      <p>
        Outside of the time that I spend on my computer and reading, I enjoy a
        bit of creative writing, running, and fiddling around on my guitar.
      </p>
      <h2> Education </h2>
      <div className="description">
        <h3>Oregon State University (Spring 2024):</h3>
        <p>
          Intro to programming 1 & 2, Discrete structures, Data Structures,
          Algorithms, Computer Architecture, Web Development, software
          Engineering 1, Databases, Computer Networks.
        </p>
        <p>
          <em>
            <u>upcoming coursework:</u>
          </em>
          Software Engineering 2, Operating Systems, Mobile Development, Cloud
          Development, Capstone Project.
        </p>
      </div>

      <div className="description">
        <h3> Current Self Study:</h3>
        <p>
          <em>
            <u>The Odin Project:</u>
          </em>
          A self paced full stack boot camp focusing on the use of Mongo DB,
          Express JS, React, and Node JS
        </p>
        <p>
          <em>
            <u>Readings:</u>
          </em>
          Modern JavaScript for the Impatient, Fluent Python, Relational
          database design and implementation, Handbook of software Engineering
          Methods, Computer Networking: a Top-down Approach.
        </p>
      </div>

      <div className="description">
        <h3>
          UC Berkeley, Bachelor's in Biology with a minor in Physics (2013):
        </h3>
        <p>
          Physics 1,2&3, Biology 1&2, Chemistry 1&2, Organic Chemistry,
          Multi-variable Calculous, Linear Algebra & Differential Equations,
          Quantum Mechanics 1, Electrodynamics, Particle Physics, Mathematical
          Analysis, BioPhysics, Evolution, Medical Ethno-botany, etc.
        </p>
      </div>
    </article>
  );
}
