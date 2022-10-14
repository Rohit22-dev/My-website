import { useState, useRef, useEffect } from "react";
import "./Header.css";
import song from "../../Night-in-Venice.mp3";
import { Link } from "react-scroll";
import axios from "axios";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);
  const [facts, setFacts] = useState("");

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

  const fact = async () => {
    await axios
      .get("https://api.api-ninjas.com/v1/facts?limit=1", {
        headers: {
          "X-Api-Key": "EpGaTDmfVkPlCthUtz/2+A==daO8XNlOCyZ8bOkU",
        },
      })
      .then((res) => {
        setFacts(res.data[0].fact);
      });
  };
  useEffect(() => {
    fact();
  }, []);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Fact time 😁</Popover.Header>
      <Popover.Body>{facts}</Popover.Body>
    </Popover>
  );

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
          <Link activeClass="active" to="exp" smooth={true} spy={true}>
            <p onClick={handleClick}>Experience</p>
          </Link>
          <p onClick={handleClick}>Project</p>
          <Link activeClass="active" to="cont" smooth={true} spy={true}>
            <p onClick={handleClick}>Contact</p>
          </Link>
        </div>
      </div>
      <div className="Header col-12">
        <div className="h-left">
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <div className="h-logo"> </div>
          </OverlayTrigger>
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
