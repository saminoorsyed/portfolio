import React from 'react';
export default function Technologies() {
  return (
    <article className='landingTech'>
        <h2>Technologies</h2>
        
        {/* div to contain a list of tech skills, plans to add logos for each skill in the future*/}
        <div className='technologies'>
          <div className='techType'>
            <h4> Skills </h4>
            <div className='cardContent'>

              <div className='tech'>
                <img src=''></img>
                <p>HTML,</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>CSS,</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>JavaScript,</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>React,</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>ExpressJs,</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>Git/GitHub,</p>
              </div>
              
              <div className='tech'>
                <img src=''></img>
                <p>Python,</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>MASM Assembly Language,</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>mySQL</p>
              </div>

            </div>
          </div>

          <div className='techType'>
            <h4>Goals</h4>
            <div className='cardContent'>
              <p>
              I hope to build real world products and contribute to high level decision making. I hope to  To that end I am interested in the following:
              </p>
              <p>
                Artificial Intelligence, Computer vision, Virtual and Augmented reality.
              </p>
            </div>
          </div>

        
        </div>
    </article>
  );
}
