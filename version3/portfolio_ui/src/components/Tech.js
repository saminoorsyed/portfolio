import React from 'react';

export default function Technologies({tech}) {
  return (
    <div className='tech'>
        <img src={`${tech.imageLoc}`}></img>
        <p>{tech.name}</p>
    </div>
  )};