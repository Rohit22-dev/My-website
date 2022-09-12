import { useEffect } from "react";
import "./Commit.css";
import Aos from "aos";

const Commit = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
    });
  }, []);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 750) {
        if (document.querySelector(".c-data>p:nth-child(1)"))
          document.querySelector(
            ".c-data>p:nth-child(1)"
          ).style.opacity = `10%`;
        if (document.querySelector(".c-data>p:nth-child(2)"))
          document.querySelector(
            ".c-data>p:nth-child(2)"
          ).style.opacity = `100%`;
      } else {
        if (document.querySelector(".c-data>p:nth-child(1)"))
          document.querySelector(
            ".c-data>p:nth-child(1)"
          ).style.opacity = `100%`;
        if (document.querySelector(".c-data>p:nth-child(2)"))
          document.querySelector(
            ".c-data>p:nth-child(2)"
          ).style.opacity = `10%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="comit col-11 mx-auto" data-aos="fade in">
      <div className="c-data">
        <p>
          I'm an enthusiastic programmer with web development skills. I take the
          responsibility to make clean and scalable apps with the latest
          frameworks and modern design.
        </p>
        <p>
          Ready to work in a team and have good verbal communication skills.
        </p>
      </div>
    </div>
  );
};

export default Commit;
