import React from "react";
import "./Projects.css";
import work1 from "../../img/work-1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="project col-12 mx-auto">
      <h1>Project</h1>
      <span>Youtube Clone</span>
      <img src={work1} alt="" />
      <a
        href="http://www.github.com/Rohit22-dev/Youtube-clone"
        className="p-btn"
      >
        Source code <AiOutlineArrowRight className="p-arrow"/>
      </a>
    </div>
  );
};

export default Projects;
