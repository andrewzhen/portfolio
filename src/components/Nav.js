import React from "react";
import { Link } from "react-router-dom";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Nav(props) {
  return (
    <header style={{ marginBottom: SPACER3 }}>
      <nav className="head-nav">
        <ul className="nav__list">
          <div>
            <li>
              <Link 
                to="/" 
                className={
                  "nav__list__item " + 
                  (props.from === "home" ? "nav__list__item--active" : undefined)
                }
                style={{ marginRight: SPACER2 }}
              >
                Andrew <span id="home">Zhen</span>
              </Link>
            </li>
          </div>
          <div className="nav__list">
            <li>
              <Link 
                to="/about" 
                className={
                  "nav__list__item " + 
                  (props.from === "about" ? "nav__list__item--active" : undefined)
                }
                style={{ marginRight: SPACER2 }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={
                  "nav__list__item " + 
                  (props.from === "contact" ? "nav__list__item--active" : undefined)
                }
              >
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}