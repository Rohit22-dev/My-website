import React, { useEffect } from "react";
import Aos from "aos";
import "./Interest.css";

const Interest = () => {
  useEffect(() => {
    Aos.init({
      offset: 600,
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    const handleScroll2 = (event) => {
      const pos = window.scrollY - 3600;
      if (document.querySelector(".line-1"))
        document.querySelector(".line-1").style.left = `${pos}px`;

      const pos2 = window.scrollY - 1400;
      if (document.querySelector(".line-2"))
        document.querySelector(".line-2").style.right = `${pos2}px`;

      if (window.scrollY <= 1900) {
        if (document.querySelector(".i-main"))
          document.querySelector(".i-main").style.background = `#fff`;
      } else if (window.scrollY > 1900 && window.scrollY <= 2800) {
        const slid = (window.scrollY - 1900) / 9;

        if (document.querySelector(".i-main"))
          document.querySelector(
            ".i-main"
          ).style.background = `linear-gradient(90deg, var(--green) ${slid}%, #fff ${slid}%)`;
      } else {
        if (document.querySelector(".i-main"))
          document.querySelector(".i-main").style.background = `var(--green)`;
      }
    };

    window.addEventListener("scroll", handleScroll2);

    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  return (
    <div className="interest col-10 mx-auto" id="inter" data-aos="fade-in">
      <div className="line-1">
        <span>
          software engineer problem solving software engineer problem solving
          software engineer problem solving software engineer problem solving
          software engineer problem solving software engineer problem solving
        </span>
      </div>
      <p className="i-main">Hello to everyone!</p>
      <div className="line-2">
        <span>
          front end developer full stack developer software engineer computer
          science front end developer full stack developer software engineer
          computer science
        </span>
      </div>
    </div>
  );
};

export default Interest;
