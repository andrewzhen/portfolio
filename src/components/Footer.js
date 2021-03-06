import React from "react";
import { SPACER2 } from "../constants";

export default function Footer() {
  return (
    <footer className="foot-nav">
      <ul className="nav__list">
        <ul className="nav__list nav__list--foot">
          <li style={{ marginRight: SPACER2 }}>
            <a 
              href="mailto:andrewjzhen@gmail.com"
              className="nav__list__item"
            >
              Email
            </a>
          </li>
          <li style={{ marginRight: SPACER2 }}>
            <a 
              href="Andrew_Zhen_resume.pdf" 
              rel="noreferrer"
              className="nav__list__item"
            >
              Resume
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/andrew-zhen/" 
              rel="noreferrer"
              className="nav__list__item"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <li>
          <p id="year">&#169; 2021</p>
        </li>
      </ul>
    </footer>
  );
}