import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Project from "../components/Project";
import { projects } from "../projects";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4, SPACER5,  
         DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR } from "../constants";

export default function Home() {
  // Helper
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
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      window.innerWidth <= 768 ? setMobile(true) : setMobile(false);
    }
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
  });

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

    // Update text color
    document.documentElement.style.setProperty('--variable-text-color', project.title ? project.textColor : DEFAULT_TEXT_COLOR);
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
        backgroundColor: mobile ? (fade ? clicked.backgroundColor : DEFAULT_BACKGROUND_COLOR) : (clicked.backgroundColor || hovered.backgroundColor)
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


        {/* Work Section*/}
        <div className="work">
          {/* List */}
          <ul 
            className={
              "work__list sticky " + 
              (mobile && fade ? "slideLeft" : "slideReset")
            }
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
                mobile={mobile}
                last={projects.length === idx + 1}
              />
            )}
          </ul>

          {/* Thumbnail */}
          <div 
            className={
              "work__thumbnail " + 
              (mobile ? (fade ? "slideReset" : "slideRight") : "slideReset")
            }
            style={{ 
              marginBottom: (mobile && !fade && SPACER2) || SPACER5, 
              maxHeight: fade ? "200vh" : "19.5vw"
            }}
          >
            <img 
              src={ mobile ? clicked.image : (clicked.image || hovered.image) } 
              className={"work__thumbnail__image"} 
            />
            <div 
              className="bottom-dropOff"
              style={{
                background: 
                  clicked.image ? "" : 
                  "linear-gradient(0deg, " + hovered.backgroundColor + " 0%, rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 0) 100%"
              }}
            ></div>
          </div>

          {/* Mobile title */}
          <div 
            className={
              "item item--mobile sticky " + 
              (mobile ? (fade ? "slideReset" : "slideRight") : "slideReset")
            }
            style={{ 
              display: (mobile ? "flex" : "none"), 
              marginBottom: SPACER2 
            }}
          >
            <h2 style={{ color: clicked.textColor }}>
              {clicked.title}
            </h2>

            <div
              className="item__close fadeIn"
              style={{ cursor: "pointer" }}
              onClick={() => { clickCallback({}); }}
            ></div>
          </div>

          {/* Details */}
          <div 
            className={
              "work__details sticky " + 
              (fade ? "fadeIn" : "fadeOut") + " " + 
              (mobile ? (fade ? "slideReset" : "slideRight") : "slideReset")
            }
            style={{ 
              marginBottom: SPACER3, 
              top: "6rem" 
            }}
          >
            <p style={{ marginBottom: SPACER1 }}>{ clicked.description }</p>
            <p style={{ marginBottom: SPACER1 }}>{ clicked.tools }</p>
            <p style={{ marginBottom: SPACER2 }}>{ clicked.date }</p>
            
            {clicked.description && 
            <a 
              className={ "work__details__button" }
              style={{ 
                color: clicked.backgroundColor, 
                backgroundColor: clicked.textColor 
              }}
              href={ clicked.url }
              target="__blank"
            >
              Visit Site
            </a>
            }
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}