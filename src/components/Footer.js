import React from "react";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a 
            href="Andrew_Zhen_resume.pdf" 
            target="_blank"
            rel="noreferrer"
            className="nav__list__item"
          >
            <span>resume.pdf</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/andrew-zhen/" 
            target="_blank"
            rel="noreferrer"
            className="nav__list__item"
          >
            <span>linkedin.com/andrewzhen</span>
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/andrewzhen"
            target="_blank"
            rel="noreferrer"
            className="nav__list__item"
          >
            <span>github.com/andrewzhen</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}