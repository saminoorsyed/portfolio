import React from 'react';
import Tech from './Tech'
export default function Technologies({tech}) {
  function checkFrontend (genre){
    return genre === 'frontend'
  };
  function checkBackend (genre){
      return genre === 'backend'
  };
  function checkInterests (genre){
      return genre === 'interests'
  };
  return (
    <article>
        <h3>Technologies</h3>
        {/* div to contain all tech cards which contain each tech will connect to database soon */}
        <div className='technologies'>
          <div className='techType'>
            <h4> Front End</h4>
            {tech.filter(checkFrontend).map((technology, i)=>
              <Tech
                  tech = {tech}
                  key = {i}
                />)}
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
