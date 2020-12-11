import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Project from "../components/Project";
import { projects } from "../projects";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4, SPACER5,  
         DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR} from "../constants";

export default function Home() {
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    console.log("RESULT ", result);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Hooks
  const [hovered, setHovered] = useState({ backgroundColor: DEFAULT_BACKGROUND_COLOR });
  const [rgb, setRgb] = useState({});
  const [fade, setFade] = useState(false);
  const [clicked, setClicked] = useState({});

  // Callbacks
  const hoverCallback = project => {
    setHovered(project);
    setRgb(hexToRgb(project.backgroundColor));
    document.getElementById("root").style.backgroundColor = project.backgroundColor;
  }
  const clickCallback = project => {
    // Fade first
    setFade(!fade);

    // Show/hide project information
    if (Object.keys(project).length !== 0) {
      setClicked(project);
    } else {
      setTimeout(function() {
        setClicked(project);
      }, 300);
    }
  }

  // const imgs = projects.map(project => project.image);

  // useEffect(() => {
  //   imgs.forEach(img => {
  //     const preload = new Image;
  //     preload.src = img.fileName;
  //   });
  // });

  return (
    <main 
      className="main" 
      style={{ 
        backgroundColor: clicked.backgroundColor || hovered.backgroundColor
      }}
    >
      <Helmet>
        <title>Andrew Zhen</title>
      </Helmet>

      <Nav from="home" />

      <Blurb text="Frontend web developer designing and developing for digital experiences. Previously built and shipped websites at A.S. Graphic Studio and helped lead UC San Diego’s largest design community at Design Co. Currently based in San Francisco Bay Area." />


      {/* Work */}
      <div className="work">
        <ul className="work__list sticky">
          {projects.map((project, idx) => 
            <Project 
              key={idx} 
              id={idx}
              title={project.title}
              textColor={project.textColor}
              backgroundColor={project.backgroundColor} 
              image={project.image}
              description={project.description}
              tools={project.tools}
              date={project.date}
              url={project.url}
              hover={{id: clicked.id, fn: hoverCallback}}
              click={{id: clicked.id, fn: clickCallback}}
            />
          )}
        </ul>

        <div 
          className="work__thumbnail" 
          style={{ marginBottom: SPACER5, maxHeight: clicked.id ? "200vh" : "21.5vw" }}
        >
          <img 
            src={clicked.image || hovered.image } 
            // src={"/images/tf.jpg"}
            className={"work__thumbnail__image"} 
          />
          <div 
            className="dropOff"
            style={{background: clicked.image ? "" : "linear-gradient(0deg, " + hovered.backgroundColor + " 0%, rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0) 100%"}}
          ></div>
        </div>

        {/* Placeholder */}
        {/* {!clicked && <div className="work__details"></div>} */}

        <div className={"work__details sticky " + (fade ? "fadeIn" : "fadeOut")}>
          <p style={{ marginBottom: SPACER1 }}>{clicked.description}</p>
          <p style={{ marginBottom: SPACER1 }}>{clicked.tools}</p>
          <p style={{ marginBottom: SPACER2 }}>{clicked.date}</p>
          {/* <p style={{ marginBottom: SPACER1 }}>ASCE, Associated Students office of Concerts & Events, is UC San Diego's student programming board responsible for some of the longest standing campus traditions. My teammate, Leo Cooperband, and I were tasked with revamping ASCE's website for a more event-driven experience by giving them a new visual identity.</p>
          <p style={{ marginBottom: SPACER1 }}>HTML, CSS, JavaScript</p>
          <p style={{ marginBottom: SPACER2 }}>September 2020</p> */}
          {clicked.description && <a 
            className={"work__details__button" }
            style={{ color: clicked.backgroundColor, backgroundColor: clicked.textColor }}
            href={clicked.url}
            target="__blank"
          >
            Visit Site
          </a>}
        </div>
      </div>

      <Footer />
    </main>
  );
}