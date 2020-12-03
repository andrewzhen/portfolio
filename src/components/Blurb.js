import React from "react";
import { SPACER1, SPACER2, SPACER3, SPACER4 } from "../constants";

export default function Blurb(props) {
  return (
    <h1 style={{ marginBottom: SPACER3 }}>
      {props.text}
    </h1>
  );
}