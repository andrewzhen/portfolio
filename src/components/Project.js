import React, { useState } from "react";
import { SPACER1, SPACER2, SPACER3, SPACER4, 
         DEFAULT_TEXT_COLOR, DEFAULT_BACKGROUND_COLOR } from "../constants";

export default function Project(props) {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  
  const self = {
    textColor: props.textColor, 
    backgroundColor: props.backgroundColor,
    image: props.image,
    description: props.description,
    tools: props.tools, 
    date: props.date
  }

  const reset = {
    backgroundColor: DEFAULT_BACKGROUND_COLOR
  }
  
  return (
    <li 
      style={{ marginBottom: SPACER1 }} 
      className="project"
      onMouseEnter={() => { setHover(true); props.hover(self); }}
      onMouseLeave={() => { setHover(false); props.hover(reset); }}
      onClick={() => { setClick(!click); !click ? props.click(self) : props.click({}); }}
    >
      <div>
        {/* Tab */}
        <div 
          className={"project__tab " + (click ? "project__tab--click" : (hover ? "project__tab--hover" : ""))}
          style={{ backgroundColor: (hover || click) ? props.textColor : DEFAULT_TEXT_COLOR }}
        ></div>  
        {/* Title */}
        <h2 
          className={"project__title " + (click ? "project__title--click" : (hover ? "project__title--hover" : ""))}
          style={{ color: (hover || click) ? props.textColor : DEFAULT_TEXT_COLOR }}
        >
          {props.title}
        </h2>
      </div>
      
      {/* Expand */}
      <div 
        className={"project__expand " + (click ? "project__expand--rotate fadeIn " : (hover ? "fadeIn" : "fadeOut"))}
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