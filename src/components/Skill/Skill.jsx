import React, { useEffect } from "react";
import "./Skill.css";
import ihtml from "../../img/i-html.png";
import icss from "../../img/i-css.png";
import iscss from "../../img/i-scss.png";
import ijs from "../../img/i-js.png";
import its from "../../img/i-ts.png";
import icpp from "../../img/i-c++.png";
import ipy from "../../img/i-python.png";
import inet from "../../img/i-netlify.png";
import ireact from "../../img/i-react.png";
import iboot from "../../img/i-boot.png";
import itail from "../../img/i-tailwind.png";
import imysql from "../../img/i-mysql.png";
import imongo from "../../img/i-mongo.png";
import inode from "../../img/i-node.png";
import igit from "../../img/i-git.png";
import lap from "../../img/lap.png";
import inext from "../../img/i-next.png"
import Aos from "aos";

const Skill = () => {
  useEffect(() => {
    Aos.init({
      offset: 500,
      duration: 3000,
    });
  }, []);
  return (
    <div className="col-md-11 col-xs-12 mx-auto d-flex align-items-center justify-content-center" id="skil" style={{transform: 'translateY(10rem)'}}>
      <div className="skill col-md-6 col-xs-12" data-aos="fade-in">
        <div className="s-head">My Skills</div>

        <div className="s-lang">
          <p>Languages and Tools</p>
          <div className="s-img">
            <img src={ihtml} alt="" />
            <img src={icss} alt="" />
            <img src={ijs} alt="" />
            <img src={its} alt="" />
            <img src={iscss} alt="" />
            <img src={icpp} alt="" />
            <img src={ipy} alt="" />
            <img src={inet} alt="" />
          </div>

          <div className="s-lang">
            <p>Frameworks</p>
            <div className="s-img">
              <img src={ireact} alt="" />
              <img src={iboot} alt="" />
              <img src={itail} alt="" />
            <img src={inext} alt="" />
            </div>
          </div>

          <div className="d-flex gap-5">
            <div className="s-lang">
              <p>Databases</p>
              <div className="s-img">
                <img src={imysql} alt="" />
                <img src={imongo} alt="" />
              </div>
            </div>

            <div className="s-lang">
              <p>Others</p>
              <div className="s-img">
                <img src={inode} alt="" />
                <img src={igit} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="s-design col-md-6 col-xs-12">
        <img src={lap} alt="" />
      </div>
    </div>
  );
};

export default Skill;
