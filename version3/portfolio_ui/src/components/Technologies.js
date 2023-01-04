import React from 'react';

export default function Technologies() {
  return (
    <article>
        <h3>Technologies</h3>
        {/* div to contain all tech cards which contain each tech will connect to database soon */}
        <div className='technologies'>
          <div className='techType'>
            <h4> Front End</h4>
              <div className='card'>
                <div className='tech'>
                  <img src=''></img>
                  <p>Javascript</p>
                </div>
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
                  <p>Python</p>
                </div>
              </div>
          </div>
          <div className='techType'>
            <h4>Back End</h4>
            <div className='card'>
              <div className='tech'>
                <img src=''></img>
                <p>React</p>
              </div>
              <div className='tech'>
                <img src=''></img>
                <p>MongoDB</p>
              </div>
            </div>
          </div>
          <div className='techType'>
            <h4>Interests</h4>
            <div className='card'>
              <div className='tech'>
                <img src=''></img>
                <p></p>
              </div>
            </div>
          </div>
        </div>
    </article>
  );
}
