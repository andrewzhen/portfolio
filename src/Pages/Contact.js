import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Tab from "../components/Tab";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Contact() {
  return (
    <main className="main">
      <div className="content">
        <Helmet>
          <title>Contact | Andrew Zhen</title>
        </Helmet>

        <Nav from="contact" />

        <Blurb text="Drop a line" />

        <div className="two-column">
          <div>
            <ul>
              <Tab 
                text="resume.pdf" 
                url="/resume.pdf" 
              />
              <Tab 
                text="andrewjzhen@gmail.com" 
                url="mailto:andrewjzhen@gmail.com" 
              />
              <Tab 
                text="linkedin.com/andrewzhen" 
                url="https://www.linkedin.com/in/andrew-zhen/" 
              />
              <Tab
                text="github.com/andrewzhen"
                url="https://github.com/andrewzhen"
              />
            </ul>
          </div>

          <div>
            <img 
              className="two-column__image" 
              src={"images/contact.jpg"} 
            />
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