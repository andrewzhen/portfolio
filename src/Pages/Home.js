import React, { useState } from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Project from "../components/Project";
import { projects } from "../projects";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4, SPACER5,  
         DEFAULT_BACKGROUND_COLOR } from "../constants";

export default function Home() {
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
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

  // Hover callback
  const hoverCallback = project => {
    setHovered(project);
    setRgb(hexToRgb(project.backgroundColor));
  }
  
  // Click callback
  const clickCallback = project => {
    // Fade first
    setFade(!fade);

    // Show/hide project information
    if (Object.keys(project).length !== 0) {
      setClicked(project);
    } else {
      // Same as above but waits to fade out
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
      <div 
        className="content"
        style={{ overflowX: (clicked.title) ? "visible" : "hidden" }}
      >
        <Helmet>
          <title>Andrew Zhen</title>
        </Helmet>

        <Nav from="home" />

        <Blurb text="Frontend web developer designing and developing for digital experiences. Previously built and shipped websites at A.S. Graphic Studio and helped lead UC San Diego’s largest design community at Design Co. Currently based in San Francisco Bay Area." />


        {/* Work */}
        <div className="work">
          <ul 
            className={"work__list sticky " + (clicked.title ? "slideLeft" : "slideReset")}
            style={{ marginBottom: SPACER3 }}
          >
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
            className={"work__thumbnail " + (clicked.title ? "slideReset" : "slideRight")}
            style={{ marginBottom: SPACER5, maxHeight: fade ? "200vh" : "19.5vw" }}
          >
            <img 
              src={clicked.image || hovered.image } 
              // src={"/images/tf.jpg"}
              className={"work__thumbnail__image"} 
            />
            <div 
              className="bottom-dropOff"
              style={{background: clicked.image ? "" : "linear-gradient(0deg, " + hovered.backgroundColor + " 0%, rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0) 100%"}}
            ></div>
          </div>

          {/* Mobile title */}
          <div 
            className={"item item--mobile sticky " + (clicked.title ? "slideReset" : "slideRight")}
            style={{ marginBottom: SPACER2 }}
          >
            <h2
              style={{ color: clicked.textColor }}
            >
              {clicked.title}
            </h2>

            <div
              // className="item__expand"
              style={{ 
                width: "1rem",
                height: "1rem",
                background: "linear-gradient(" + clicked.textColor + ", " + clicked.textColor + "), linear-gradient(" + clicked.textColor + ", " + clicked.textColor + "), " + clicked.backgroundColor,
                backgroundPosition: "center",
                backgroundSize: "100% 2px, 2px 100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                cursor: "pointer"
              }}
              onClick={() => {
                setClicked({});
              }}
            ></div>
          </div>

          <div 
            className={"work__details sticky " + (fade ? "fadeIn" : "fadeOut") + " " + (clicked.title ? "slideReset" : "slideRight")}
            style={{ marginBottom: SPACER3, top: "6rem" }}
          >
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
      </div>
    </main>
  );
}