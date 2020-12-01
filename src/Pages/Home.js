import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import { projects } from "../projects";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Home() {
  return (
    <main className="main">
      <Helmet>
        <title>Andrew Zhen</title>
      </Helmet>

      <Nav />

      <Blurb />

      {/* Work */}
      <ul>
        {projects.map((project, idx) => 
          <li key={idx} style={{ marginBottom: SPACER2 }}>
            {project.title}
          </li>
        )}
      </ul>

      <Footer />
    </main>
  );
}