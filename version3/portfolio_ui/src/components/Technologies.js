import React from 'react';
export default function Technologies() {
  return (
    <article id='landingTech'>
        <h3>Technologies</h3>
        {/* div to contain all tech cards which contain each tech will connect to database soon */}
        <div className='technologies'>
          <div className='techType'>
            <h4> Skills </h4>
            <div className='cardContent'>

              <div className='tech'>
                <img src=''></img>
                <p>HTML</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>CSS</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>JavaScript</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>React</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>ExpressJs</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>Git/GitHub</p>
              </div>
              
              <div className='tech'>
                <img src=''></img>
                <p>Python</p>
              </div>

              <div className='tech'>
                <img src=''></img>
                <p>Assembly Lang/ MASM</p>
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
