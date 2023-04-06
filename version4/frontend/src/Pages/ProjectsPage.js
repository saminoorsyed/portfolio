// import dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import components
import ProjectCard from '../components/blogComponents/ProjectCard';

const ProjectsPage = () => {
  const [featured, setFeatured] = useState([]);
  const [minis, setMinis] = useState([]);
  const [updateFeatured, setUpdateFeatured] = useState(false);
  const [updateMinis, setUpdateMinis] = useState(false);
  
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

  return (
    <section>
      <div className="projects-container">
        {featured.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </div>
      <div className="projects-container">
        {minis.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </div>
    </section>
  );
}

export default ProjectsPage
