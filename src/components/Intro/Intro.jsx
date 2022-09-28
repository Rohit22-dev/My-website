import React from "react";
import "./Intro.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import pic1 from "../../img/pic1.png";
import pic2 from "../../img/pic2.png";
import pic3 from "../../img/pic3.png";
import phone from "../../img/phone.png";

const Intro = () => {
  return (
    <div className="Intro col-11 mx-auto d-flex pt-5" id="/">
      <div className="i-left col-6 ps-5 gap-3 h-100">
        <h2>const greetings = 'Hey!'</h2>
        <h2>My name is</h2>
        <h1>Rohit Kumar</h1>
        <div className="i-decor"></div>
        <div className="typing-slider text-light opacity-50">
          <p>A pragmatic full stack developer</p>
          <p>I create aesthetic and modern apps</p>
          <p>I build things for web</p>
        </div>

        <div className="i-link gap-4">
          <a
            href="http://www.github.com/Rohit22-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiGithub className="i-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-78322b207"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiLinkedin className="i-icon" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=rkkeepscode@gmail.com&body=Body&su=Subject"
            target="_blank"
            rel="noreferrer noopener"
          >
            <HiOutlineMail className="i-icon" />
          </a>
        </div>

        <Link activeClass="active" to="cont" smooth={true} spy={true}>
          <button className="i-btn mt-5 p-3 px-5">Let's Talk</button>
        </Link>
      </div>

      <div className="i-right col-6 h-100">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={phone} alt="" />
        <p className="i-dev text-light">DEV</p>
      </div>
    </div>
  );
};

export default Intro;
