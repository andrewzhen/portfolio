import React, { useState } from "react";
import { SPACER1, SPACER2, SPACER3, SPACER4, 
         DEFAULT_TEXT_COLOR, DEFAULT_BACKGROUND_COLOR } from "../constants";

export default function Project(props) {
  const [hover, setHover] = useState(false);

  return (
    <li 
      key={props.key} 
      style={{ marginBottom: SPACER1 }} 
      className="project"
      onMouseEnter={() => { setHover(true); props.parentCallback(props.backgroundColor) }} 
      onMouseLeave={() => { setHover(false); props.parentCallback(DEFAULT_BACKGROUND_COLOR) }}
      // onClick={}
    >
      <div>
        {/* Tab */}
        <div 
          className={"project__tab " + (hover ? "project__tab--hover" : undefined)}
          style={{ backgroundColor: hover ? props.textColor : DEFAULT_TEXT_COLOR }}
        ></div>  
        {/* Title */}
        <h2 
          className={"project__title " + (hover ? "project__title--hover" : undefined)}
          style={{ color: hover ? props.textColor : DEFAULT_TEXT_COLOR }}
        >
          {props.title}
        </h2>
      </div>
      
      {/* Expand */}
      <div 
        className={"project__expand " + (hover ? "fadeIn" : "fadeOut")}
        style={{ 
          background: "linear-gradient(" + props.textColor + ", " + props.textColor + "), linear-gradient(" + props.textColor + ", " + props.textColor + "), " + props.backgroundColor,
          backgroundPosition: "center", 
          backgroundSize: "100% 2px, 2px 100%", 
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent"
        }}
      ></div>

    </li>
  );
}