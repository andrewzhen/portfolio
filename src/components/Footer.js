import React from "react";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Footer() {
  return (
    <footer className="foot-nav">
      <ul className="foot-nav__item">
        <div className="foot-nav__item">
          <li style={{ marginRight: SPACER1 }}>
            <a href="mailto:andrewjzhen@gmail.com">Email</a>
          </li>
          <li style={{ marginRight: SPACER1 }}>
            <a href="../resume.pdf" target="_blank">Resume</a>
          </li>
          <li style={{ marginRight: SPACER1 }}>
            <a href="https://www.linkedin.com/in/andrew-zhen/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/andrewzhen" target="_blank">Github</a>
          </li>
        </div>

        <div>
          <p>&#169; 2020</p>
        </div>
      </ul>
    </footer>
  );
}