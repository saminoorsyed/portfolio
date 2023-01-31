// import dependencies
import React from 'react';
// import components


export default function ProjectsPage(){
    return(
        <section>
            <h1>Projects</h1>
            <div className='projectsContainer'>
                <div>
                    <h3>Web Development</h3>
                    <div className='projectGenre'>
                        <div className='projectCard'>
                            <img src='../images/dummy.jpg'></img>
                            <p>dummy project description</p>
                        </div>
                        <div className='projectCard'>
                            <img src='../images/dummy.jpg'></img>
                            <p>dummy project description</p>
                        </div>
                        <div className='projectCard'>
                            <img src='../images/dummy.jpg'></img>
                            <p>dummy project description</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Extras</h3>
                    <div className='projectGenre'>
                        <div className='projectCard'>
                            <img src='../images/dummy.jpg'></img>
                            <p>dummy project description</p>
                        </div>
                        <div className='projectCard'>
                            <img src='../images/dummy.jpg'></img>
                            <p>dummy project description</p>
                        </div>
                        <div className='projectCard'>
                            <img src='../images/dummy.jpg'></img>
                            <p>dummy project description</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}