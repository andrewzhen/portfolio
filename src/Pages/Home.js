import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Project from "../components/Project";
import { projects } from "../projects";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER5,  
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
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
  });

  // Resizer
  function handleResize() {
    // Detect change to/from mobile
    if (mobile !== (window.innerWidth <= 768)) {
      if (!mobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }
    // setMobile(window.innerWidth <= 768);
  }

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
            style={{ 
              marginBottom: SPACER5,
              marginTop: mobile ? "0" : "-" + SPACER1
            }}
          >
            {projects.map((project, idx) => 
              <Project 
                key={idx} 
                id={idx}
                title={project.title}
                textColor={project.textColor}
                backgroundColor={project.backgroundColor} 
                base={project.base}
                images={project.images}
                description={project.description}
                tools={project.tools}
                date={project.date}
                url={project.url}
                code={project.code}
                hover={hoverCallback}
                click={{id: clicked.id, fn: clickCallback, state: fade}}
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
              maxHeight: fade ? "600vh" : "19.5vw",
              backgroundColor: clicked.backgroundColor
            }}
          >
            {clicked.images ? 
              clicked.images.map((image) => 
                <img 
                  src={ clicked.base + image } 
                  className="work__thumbnail__image"
                  style={{ 
                    display: clicked.images ? "block" : "none",
                    marginBottom: SPACER2 
                  }}
                  alt={clicked.title}
                />
              ) : 
              <img 
                src={ hovered.images ? (hovered.base + hovered.images[0]) : ""} 
                className="work__thumbnail__image"
                style={{ 
                  display: hovered.images ? "block" : "none",
                  marginBottom: SPACER2 
                }}
                alt={clicked.title}
              />
            }
            <div 
              className="bottom-dropOff"
              style={{
                background: 
                  clicked.images ? "" : 
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
              marginBottom: mobile ? SPACER3 : SPACER5, 
              top: mobile ? "6rem" : "3rem"
            }}
          >
            <p 
              className="dropcap--work" 
              style={{ marginBottom: SPACER1 }}
            >
              { clicked.description }
            </p>
            <p style={{ marginBottom: SPACER1 }}>{ clicked.tools }</p>
            <p style={{ marginBottom: SPACER2 }}>{ clicked.date }</p>
            
            {clicked.description && 
              <div className="work__details__links">
                <a 
                  className="work__details__links__button work__details__links__button--site"
                  style={{ 
                    color: clicked.backgroundColor, 
                    backgroundColor: clicked.textColor,
                    marginRight: SPACER1
                  }}
                  href={ clicked.url }
                >
                  Visit Site
                </a>

                <a 
                  className="work__details__links__button work__details__links__button--code"
                  style={{ 
                    color: clicked.textColor,
                    border: "0.15rem solid " + clicked.textColor 
                  }}
                  href={ clicked.code }
                >
                  View Code
                </a>
              </div>
            }
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}