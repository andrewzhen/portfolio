import React, { useState } from "react";
import { SPACER1 } from "../constants";

export default function Tab(props) {
  const [hover, setHover] = useState(false);

  return (
    <li 
      className="item"
      style={{ marginBottom: SPACER1 }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div>
        {/* Tab */}
        <div className={"item__tab " + (hover ? "item__tab--hover" : "")}></div>

        {/* Link */}
        <a 
          href={props.url} 
          target="_blank"
        >
          <h2 className={"item__title " + (hover ? "item__title--hover" : "")} >
            {props.text}
          </h2>
        </a>
      </div>
    </li>
  )
}