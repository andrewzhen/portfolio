import React from "react";
import { Link } from "react-router-dom";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Nav() {
  return (
    <header style={{ marginBottom: SPACER3 }}>
      <nav className="head-nav">
        <ul className="head-nav__item">
          <div>
            <li>
              <Link to="/">Andrew Zhen</Link>
            </li>
          </div>
          <div className="head-nav__item">
            <li>
              <Link to="/about" style={{ marginRight: SPACER2 }}>About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}