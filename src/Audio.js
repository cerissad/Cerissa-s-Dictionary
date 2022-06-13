import React from "react";
import "./Audio.css";

export default function Audio(props) {
  let audio = props.audio;

  if (audio === "") {
    return null;
  } else {
    return (
      <span>
        <a href={audio} target="_blank" rel="noreferrer">
          <button>Listen</button>
        </a>{" "}
        -
      </span>
    );
  }
}
