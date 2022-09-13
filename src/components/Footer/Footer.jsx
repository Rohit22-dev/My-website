import React from "react";
import "./Footer.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <div className="foot">
      <div className="container">
        <h3>Feel free to connect on social media.</h3>
        <div className="f-link gap-4">
          <a
            href="http://www.github.com/Rohit22-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiGithub className="f-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-78322b207"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiLinkedin className="f-icon" />
          </a>
          <a href="mailto:rkkeepscode@gmail.com">
            <HiOutlineMail className="f-icon" />
          </a>
          <AiOutlineInstagram className="f-icon" />
        </div>

        <Link activeClass="active" to="cont" smooth={true} spy={true}>
          <span className="btn mt-5">Let's Talk </span>
        </Link>
        <h4>
          Developed with <AiFillHeart className="heart" /> by Rohit Kumar
        </h4>
        <div className="boder-box" >
          <div className="border2"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
