import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav";
import Blurb from "../components/Blurb";
import Footer from "../components/Footer";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function About() {
  return (
    <main className="main">
      <Helmet>
        <title>About | Andrew Zhen</title>
      </Helmet>

      <Nav from="about" />

      <Blurb text="75% dev, 24% design, and 1% noodles" />

      <Footer />
    </main>
  );
}