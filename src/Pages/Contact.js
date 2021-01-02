import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Tab from "../components/Tab";
import ContactFooter from "../components/ContactFooter";
import { SPACER1, SPACER2, SPACER3, SPACER4, SPACER5 } from "../constants";

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
          <div 
            className="two-column__list"
            style={{ marginBottom: SPACER3 }}
          >
            <ul>
              <Tab 
                text="resume.pdf*" 
                url="resume.pdf" 
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
              <Tab
                text="instagram.com/a.jzhen"
                url="https://www.instagram.com/a.jzhen/"
                last="true"
              />
            </ul>
          </div>

          <div style={{ marginBottom: SPACER5 }}>
            <img 
              className="two-column__image" 
              src={"images/contact.jpg"} 
            />
            <div className="left-dropOff"></div>
          </div>
        </div>

        <ContactFooter />
      </div>
    </main>
  );
}