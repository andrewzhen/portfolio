import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Footer from "../components/Footer";
import { SPACER2, SPACER5 } from "../constants";

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
          <div style={{ marginBottom: SPACER5 }}>
            <p 
              className="dropcap--about" 
              style={{ marginBottom: SPACER2 }}
            >
              Hi! I'm a new graduate from UCSD where I studied Cognitive Science – Design Interaction, Computer Science, and Data Science.
            </p>

            <p style={{ marginBottom: SPACER2 }}>
              With a passion and skillset in front-end development, design prototyping, and collaboration, I'm looking for an exciting, mission-driven opportunity.
            </p>

            <p style={{ marginBottom: SPACER2 }}>
              I'm currently helping accelerate the adoption of electric vehicles at AMPLY Power as a Frontend Developer. Previously, I've designed and developed websites at A.S. Graphic Studio, UCSD’s graphic design agency. I've also lead workshops and helped build out our website at Design Co, UCSD’s pre-professional design organization. Before that, I was a UX developer at UCSD’s IT Services in addition to working at the San Diego Supercomputer Center.
            </p>

            <p>
              When I'm not a desk potato, I’m a big fan of basketball, interior design, and photosynthesizing in the sun. I'm also on a quest to find the best spicy chicken sandwich. If none of these topics apply, come talk to me about your favorite thing; I'd love to hear from you!
            </p>
          </div>

          <div style={{ marginBottom: SPACER5 }}>
            <img 
              className="two-column__image"
              src={"images/portrait.webp"} 
              alt="portrait"
              width="450px"
              height="450px"
            />
            <div  className="left-dropOff"></div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}