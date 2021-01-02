import React, { useState } from "react";
import { SPACER1 } from "../constants";

export default function Tab(props) {
  const [hover, setHover] = useState(false);

  return (
    <li 
      className="tab"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {/* Link */}
      <a 
        className="item item--link"
        href={props.url} 
        target="_blank"
      >
        {/* Top divider */}
        <div className="item__divider"></div>

        {/* Tab */}
        <div className={
          "item__tab " + 
          (hover ? "item__tab--hover" : "")
        }></div>
        
        {/* Title */}
        <h2 className={
          "item__title " + 
          (hover ? "item__title--hover" : "")
        }>
          {props.text}
        </h2>

        {/* Arrow */}
        <img 
          className="item--link__image"
          src="icons/arrow.svg" 
        /> 
      </a>

      {/* Bottom divider */}
      {
        props.last && 
        <div className="item__divider item__divider--bottom"></div>
      }
    </li>
  )
}