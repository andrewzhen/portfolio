import React, { useState } from "react";
import { SPACER1, SPACER2, SPACER3, SPACER4, 
         DEFAULT_TEXT_COLOR, DEFAULT_BACKGROUND_COLOR } from "../constants";

export default function Project(props) {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  
  const hoveredProject = {
    textColor: props.textColor, 
    backgroundColor: props.backgroundColor,
    image: props.image
  }

  const clickedProject = {
    id: props.id,
    title: props.title,
    textColor: props.textColor, 
    backgroundColor: props.backgroundColor,
    image: props.image,
    description: props.description,
    tools: props.tools, 
    date: props.date,
    url: props.url
  }

  const resetProject = {
    backgroundColor: DEFAULT_BACKGROUND_COLOR
  }
  
  return (
    <li 
      id={props.id}
      style={{ marginBottom: SPACER1, cursor: (props.hover.id === undefined ||props.hover.id === props.id) ? "pointer" : "default" }} 
      className="item"
      onMouseEnter={() => { 
        // Hover state if no project clicked or if it is the clicked project
        if ((props.hover.id === undefined) || props.hover.id === props.id) {
          setHover(true); 
          props.hover.fn(hoveredProject); 
        }
      }}
      onMouseLeave={() => { 
        // Hover state if no project clicked or if it is the clicked project
        if ((props.hover.id === undefined) || props.hover.id === props.id) {
          setHover(false); 
          props.hover.fn(resetProject); 
        }
      }}
      onClick={() => {
        // Click state if no project clicked or if it is the clicked project
        if ((props.hover.id === undefined) || props.click.id === props.id) {
          setClick(!click); 
          !click ? props.click.fn(clickedProject) : props.click.fn({});
        }
      }}
    >
      <div>
        {/* Tab */}
        <div 
          className={"item__tab " + (click ? "item__tab--click" : (hover ? "item__tab--hover" : ""))}
          style={{ backgroundColor: (hover || click) ? props.textColor : DEFAULT_TEXT_COLOR }}
        ></div>  
        {/* Title */}
        <h2 
          className={"item__title " + (click ? "item__title--click" : (hover ? "item__title--hover" : ""))}
          style={{ color: (hover || click) ? props.textColor : DEFAULT_TEXT_COLOR }}
        >
          {props.title}
        </h2>
      </div>
      
      {/* Expand */}
      <div 
        className={"item__expand " + (click ? "item__expand--rotate fadeIn " : (hover ? "fadeIn" : "fadeOut"))}
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