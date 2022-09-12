import { useState, useRef } from "react";
import "./Header.css";
import song from "../../Night-in-Venice.mp3";
import { Link } from "react-scroll";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);
  const myRef = useRef();

  const handlePlay = () => {
    setIsplaying(!isPlaying);
    if (!isPlaying) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const x = isPlaying ? "bar start" : "bar";

  return (
    <>
      <div
        id="myNav"
        className="overlay"
        style={isActive ? { width: "100%" } : { width: "0" }}
      >
        <div className="overlay-content">
          <Link activeClass="active" to="/" smooth={true} spy={true}>
            <p onClick={handleClick}>Home</p>
          </Link>
          <Link activeClass="active" to="skil" smooth={true} spy={true}>
            <p onClick={handleClick}>Skills</p>
          </Link>
          <p onClick={handleClick}>Work</p>
          <Link activeClass="active" to="cont" smooth={true} spy={true}>
            <p onClick={handleClick}>Contact</p>
          </Link>
        </div>
      </div>
      <div className="Header col-12">
        <div className="h-left">
          <div className="h-logo"></div>
        </div>

        <div className="h-right d-flex align-items-center justify-content-center">
          <audio ref={myRef} src={song} />
          <div className="bars" onClick={handlePlay}>
            <div className={x} style={{ height: "1.8rem" }}></div>
            <div className={x} style={{ height: ".7rem" }}></div>
            <div className={x} style={{ height: "1rem" }}></div>
            <div className={x} style={{ height: "1.7rem" }}></div>
            <div className={x} style={{ height: "2.5rem" }}></div>
            <div className={x} style={{ height: "1.8rem" }}></div>
            <div className={x} style={{ height: "1.1rem" }}></div>
          </div>

          <div
            className={isActive ? "threeLines active" : "threeLines"}
            onClick={handleClick}
          >
            <button className="el"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
