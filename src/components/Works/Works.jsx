import React from "react";
import "./Works.css";
import work1 from "../../img/work-1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Works = () => {
  return (
    <div className="work col-12 mx-auto">
      <h1>Work</h1>
      <span>Youtube Clone</span>
      <img src={work1} alt="" />
      <a
        href="http://www.github.com/Rohit22-dev/Youtube-clone"
        className="w-btn"
      >
        Source code <AiOutlineArrowRight className="w-arrow"/>
      </a>
    </div>
  );
};

export default Works;
