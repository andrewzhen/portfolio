import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Project from "../components/Project";
import { projects } from "../projects";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4, 
         DEFAULT_BACKGROUND_COLOR, DEFAULT_TEXT_COLOR} from "../constants";

export default function Home() {
  // Hooks
  const [hovered, setHovered] = useState(
    { backgroundColor: DEFAULT_BACKGROUND_COLOR }
  );
  const [clicked, setClicked] = useState({});

  // Callbacks
  const hoverCallback = project => {
    setHovered(project);
    document.getElementById("root").style.backgroundColor = project.backgroundColor;
  }
  const clickCallback = project => {
    setClicked(project);
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
        <ul className="work__list">
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
              hover={hoverCallback}
              click={clickCallback}
            />
          )}
        </ul>

        <div className="work__thumbnail">
          <img 
            src={hovered.image} 
            // src={"/images/as.jpg"}
            className={"work__thumbnail__image"} 
          />
        </div>

        {/* Placeholder */}
        {!clicked && <div className="work__details"></div>}

        {clicked && <div className="work__details">
          <p style={{ marginBottom: SPACER1 }}>{clicked.description}</p>
          <p style={{ marginBottom: SPACER1 }}>{clicked.tools}</p>
          <p style={{ marginBottom: SPACER2 }}>{clicked.date}</p>
          {/* <p style={{ marginBottom: SPACER1 }}>ASCE, Associated Students office of Concerts & Events, is UC San Diego's student programming board responsible for some of the longest standing campus traditions. My teammate, Leo Cooperband, and I were tasked with revamping ASCE's website for a more event-driven experience by giving them a new visual identity.</p>
          <p style={{ marginBottom: SPACER1 }}>HTML, CSS, JavaScript</p>
          <p style={{ marginBottom: SPACER2 }}>September 2020</p> */}
          {clicked.description && <a 
            className={"work__details__button " + (clicked.description ? "fadeIn" : "fadeOut") }
            style={{ color: clicked.backgroundColor, backgroundColor: clicked.textColor }}
            href={clicked.url}
            target="__blank"
          >
            Visit Site
          </a>}
        </div>}
      </div>

      <Footer />
    </main>
  );
}