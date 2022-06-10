import React from "react";

export default function Audio(props) {
  let audio = props.audio;

  if (audio === "") {
    return null;
  } else {
    return (
      <span>
        <a href={audio} target="_blank" rel="noreferrer">
          Listen
        </a>{" "}
        -
      </span>
    );
  }
}
