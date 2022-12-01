import "./App.css";
import { useState, useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Interest from "./components/Interest/Interest";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skill/Skill";
import GridLoader from "react-spinners/GridLoader";
import AnimatedCursor from "react-animated-cursor";
import Commit from "./components/Commit/Commit";
import "aos/dist/aos.css";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <GridLoader color={"var(--green"} loading={loading} size={40} />
        </div>
      ) : (
        <div className="App">
          <Header />
          <Intro />
          <Commit />
          <Skill />
          <Interest />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <AnimatedCursor
            innerSize={8}
            outerSize={32}
            color="1, 182, 54"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            // trailingSpeed={5}
          />
        </div>
      )}
    </>
  );
}

export default App;
