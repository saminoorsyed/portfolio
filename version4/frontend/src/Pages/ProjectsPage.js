// import dependencies
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
// import components
import ProjectCard from '../components/blogComponents/ProjectCard';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

const ProjectsPage = () => {
  const [featured, setFeatured] = useState([]);
  const [minis, setMinis] = useState([]);
  const [updateFeatured, setUpdateFeatured] = useState(false);
  const [updateMinis, setUpdateMinis] = useState(false);
  const [leftScroll, setLeftScroll] = useState(0);
  const [maxLeftScroll, setMaxLeftScroll] = useState(0);
  
  const projectContainerRef = useRef(null);

  // load and update Featured Projects
  useEffect(()=>{
    const loadFeatured = async () => {
      const { data } = await axios.get("/api/projects?search=featured");
      setFeatured(data);
    };
    loadFeatured();

  }, [updateFeatured]);

  useEffect(()=>{
    const loadMinis = async () => {
      const { data } = await axios.get("/api/projects?search=minis");
      setMinis(data);
    };
    loadMinis();
  },[updateMinis]);

  useEffect(()=> {
    const container = projectContainerRef.current;
    const maxScroll = container.scrollWidth -  container.clientWidth
    setMaxLeftScroll(maxScroll)
  },[]);

  const handleLeftScroll = () => {
   const newLeftScroll = Math.max(leftScroll - 400, 0);
   setLeftScroll(newLeftScroll);
   projectContainerRef.current.scrollLeft = -newLeftScroll;
  };

  const handleRightScroll = () => {
   const newLeftScroll = Math.min(leftScroll + 400, maxLeftScroll);
   setLeftScroll(newLeftScroll);
   projectContainerRef.current.scrollLeft = -newLeftScroll;
  };




  return (
    <section>
      <div className='scroller'>
        <FaArrowLeft onClick={handleLeftScroll}/>
        <div 
          className="projects-container" 
          ref={projectContainerRef}>
          
          {featured.map((project, i) => {
            return <ProjectCard project={project} key={i} />;
          })}
        </div>
        <FaArrowRight onClick={handleRightScroll}/>
      </div>
      <div className="projects-container" ref={projectContainerRef}>
        {minis.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </div>
    </section>
  );
}

export default ProjectsPage
