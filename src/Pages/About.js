import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function About() {
  return (
    <main className="main">
      <div className="content">
        <Helmet>
          <title>About | Andrew Zhen</title>
        </Helmet>

        <Nav from="about" />

        <Blurb text="75% dev, 24% design, and 1% noodles" />

        <div className="two-column">
          <div>
            <p style={{ marginBottom: SPACER1 }}>
              I’m a 4th year Cognitive Science–Design major at UCSD and an aspiring UX engineer with a passion and skillset in design prototyping, front-end development, and collaboration!
            </p>

            <p style={{ marginBottom: SPACER1 }}>
              Currently, I design and develop websites at UCSD’s graphic design agency, @ A.S. Graphic Studio, and lead workshops and code away with React.js @ Design Co, UCSD’s pre-professional design organization.
            </p>

            <p style={{ marginBottom: SPACER1 }}>
              Previously, I worked as a UX developer @ UCSD’s IT Services and @ The Center for Applied Internet Data Analysis (Supercomputer Center).
            </p>

            <p>
              Away from my computer, I’m a big fan of basketball, architecture, and photosynthesizing in the sun. I'm also on a quest to find the best spicy chicken sandwhich. Come talk to me about your favorite topic; I'd love to hear from you!
            </p>
          </div>

          <div>
            <img src={"images/portrait.jpg"} />
            <div 
              className="left-dropOff"
              style={{ background: "linear-gradient(90deg, #111111 0%, rgba(17, 17, 17, 0) 100%)" }}
            ></div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}