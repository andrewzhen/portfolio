import React from "react";
import { SPACER3 } from "../constants";

export default function Blurb(props) {
  return (
    <h1 style={{ marginBottom: SPACER3 }}>
      {props.text}
    </h1>
  );
}