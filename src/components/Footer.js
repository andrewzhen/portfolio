import React from "react";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Footer() {
  return (
    <footer className="foot-nav">
      <ul className="nav__list">
        <div className="nav__list">
          <li style={{ margin: "0 " + SPACER1 +  " 0 -" + SPACER1 }}>
            <a 
              href="mailto:andrewjzhen@gmail.com"
              className="nav__list__item"
            >
              Email
            </a>
          </li>
          <li style={{ marginRight: SPACER1 }}>
            <a 
              href="../resume.pdf" 
              target="_blank"
              className="nav__list__item"
            >
              Resume
            </a>
          </li>
          <li style={{ marginRight: SPACER1 }}>
            <a 
              href="https://www.linkedin.com/in/andrew-zhen/" 
              target="_blank"
              className="nav__list__item"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/andrewzhen" 
              target="_blank"
              className="nav__list__item"
            >
              Github
            </a>
          </li>
        </div>

        <div>
          <p>&#169; 2020</p>
        </div>
      </ul>
    </footer>
  );
}