import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
// import components
import ProjectCard from "../components/blogComponents/ProjectCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectsPage = () => {
  const [featured, setFeatured] = useState([]);
  const [minis, setMinis] = useState([]);
  const [updateFeatured, setUpdateFeatured] = useState(false);
  const [updateMinis, setUpdateMinis] = useState(false);

  const featuredContainerRef = useRef(null);

  // load and update Featured Projects
  useEffect(() => {
    const loadFeatured = async () => {
      const { data } = await axios.get("/api/projects?search=featured");
      setFeatured(data);
    };
    loadFeatured();
  }, [updateFeatured]);

  useEffect(() => {
    const loadMinis = async () => {
      const { data } = await axios.get("/api/projects?search=minis");
      setMinis(data);
    };
    loadMinis();
  }, [updateMinis]);

  const handleScroll = (scrollAmt) => {
    featuredContainerRef.current.scrollLeft+=scrollAmt
  }

  return (
    <section>
      <div className="scroller">
        <button onClick={()=>handleScroll(-270)}>
          <FaArrowLeft />
        </button>
        <div
          className="projects-container"
          ref={featuredContainerRef}
        >
          {featured.map((project, i) => {
            return <ProjectCard project={project} key={i} />;
          })}
        </div>
        <button onClick={()=>handleScroll(270)}>
          <FaArrowRight/>
        </button>
      </div>
      <div className="projects-container">
        {minis.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;
