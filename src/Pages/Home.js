import React, { useState } from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Project from "../components/Project";
import { projects } from "../projects";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4, 
         DEFAULT_BACKGROUND_COLOR } from "../constants";

export default function Home() {
  const [newBackgroundColor, setNewBackgroundColor] = useState(DEFAULT_BACKGROUND_COLOR);

  const callback = color => {
    setNewBackgroundColor(color);
  }

  return (
    <main className="main" style={{ backgroundColor: newBackgroundColor }}>
      <Helmet>
        <title>Andrew Zhen</title>
      </Helmet>

      <Nav from="home" />

      <Blurb text="Frontend web developer designing and developing for digital experiences. Previously built and shipped websites at A.S. Graphic Studio and helped lead UC San Diego’s largest design community at Design Co. Currently based in San Francisco Bay Area." />

      {/* Work */}
      <ul>
        {projects.map((project, idx) => 
          <Project 
            key={idx} 
            title={project.title}
            textColor={project.textColor}
            backgroundColor={project.backgroundColor} 
            parentCallback={callback}
          />
        )}
      </ul>

      <Footer />
    </main>
  );
}