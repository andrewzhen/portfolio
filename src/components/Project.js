import React, { useState } from "react";
import { DEFAULT_TEXT_COLOR, DEFAULT_BACKGROUND_COLOR } from "../constants";

export default function Project(props) {
  // Helpers
  function updateTextColor(color) {
    document.documentElement.style.setProperty('--variable-text-color', color);
  }

  var clicked = props.click.id === props.id;

  // Hook
  const [hover, setHover] = useState(false);
  
  // Return objects
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
      style={{ 
        cursor: (props.click.id === undefined || props.click.id === props.id) ? "pointer" : "default" 
      }} 
      className="item"
      onMouseEnter={() => { 
        // Set hover if no project clicked or if is target project
        if (props.click.id === undefined || props.click.id === props.id) {
          setHover(true); 
          updateTextColor(props.textColor);
          props.hover(hoveredProject); 
        }
      }}
      onMouseLeave={() => { 
        // Set hover if no project clicked or if is target project
        if (props.click.id === undefined || props.click.id === props.id) {
          setHover(false); 
          props.hover(resetProject); 
        }
      }}
      onClick={() => {
        // If no project clicked or if is the target project
        if (props.click.id === undefined || props.click.id === props.id) {
          // Toggle clicked project
          props.click.state ? props.click.fn({}) : props.click.fn(clickedProject);
        }
      }}
    >
      {/* Top divider */}
      <div className="item__divider"></div>

      <div>
        {/* Tab */}
        <div 
          className={
            "item__tab " + 
            (clicked ? "item__tab--click" : (hover ? "item__tab--hover" : ""))
          }
          style={{ 
            backgroundColor: (hover || clicked) ? props.textColor : DEFAULT_TEXT_COLOR 
          }}
        ></div>  
        {/* Title */}
        <h2 
          className={
            "item__title " + 
            (clicked ? "item__title--click" : (hover ? "item__title--hover" : ""))
          }
          style={{ 
            color: (hover || clicked || props.mobile) ? props.textColor : DEFAULT_TEXT_COLOR 
          }}
        >
          {props.title}
        </h2>
      </div>
      
      {/* Expand */}
      <div 
        className={
          "item__expand " + 
          (clicked ? "item__expand--rotate fadeIn " : ((hover || props.mobile) ? "fadeIn" : "fadeOut"))
        }
        style={{
          background: "linear-gradient(" + props.textColor + ", " + props.textColor + "), linear-gradient(" + props.textColor + ", " + props.textColor + "), " + props.backgroundColor,
          backgroundPosition: "center", 
          backgroundSize: "100% 2px, 2px 100%", 
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent"
        }}
      ></div>

      {/* Bottom divider */}
      {
        props.last && 
        <div className="item__divider item__divider--bottom"></div>
      }
    </li>
  );
}