import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// import components
import { Button } from "@chakra-ui/react";
import ProjectCard from "../components/blogComponents/ProjectCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectsPage = () => {
  const [featured, setFeatured] = useState([]);
  const [minis, setMinis] = useState([]);
  const [updateFeatured, setUpdateFeatured] = useState(false);
  const [updateMinis, setUpdateMinis] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);
  const featuredContainerRef = useRef(null);
  const minisContainerRef = useRef(null)
  
  useEffect(() =>{
    const userObj = JSON.parse(localStorage.getItem("userInfo"));
    if (userObj && userObj.author){
      setIsAuthor(true);
    };
  },[]);

  // load and update Featured Projects
  useEffect(() => {
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
    }
    loadMinis();
  },[updateMinis])

  const handleScroll = (containerRef, direction) => {
    if (direction === "right"){
      containerRef.current.scrollLeft+=270;
    }else{
      containerRef.current.scrollLeft-=270;
    };
  };

  return (
    <section>
      <h2>Featured</h2>
      <div className="scroller">
        <button onClick={() => handleScroll(featuredContainerRef, "left")}>
          <FaArrowLeft />
        </button>
        <div className="projects-container" ref={featuredContainerRef}>
          {featured.length > 0 && featured.map((project, i) => {
            return <ProjectCard project={project} isAuthor={isAuthor} updated={updateFeatured} setUpdated={setUpdateFeatured} key={i} />;
          })}
        </div>
        <button onClick={() => handleScroll(featuredContainerRef, "right")}>
          <FaArrowRight />
        </button>
      </div>
      <h2>Minis</h2>
      <div className="scroller">
        <button onClick={() => handleScroll(minisContainerRef, "left")}>
          <FaArrowLeft />
        </button>
        <div className="projects-container" ref={minisContainerRef}>
          {minis.length > 0 &&minis.map((project, i) => {
            return <ProjectCard project={project} isAuthor={isAuthor} updated = {updateMinis} setUpdated={setUpdateMinis} key={i} />;
          })}
        </div>
        <button onClick={() => handleScroll(minisContainerRef, "right")}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectsPage;
