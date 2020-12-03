import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Contact() {
  return (
    <main className="main">
      <Helmet>
        <title>Contact | Andrew Zhen</title>
      </Helmet>

      <Nav from="contact" />

      <Blurb text="Drop a line" />

      <Footer />
    </main>
  );
}