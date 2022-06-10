import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <div>
      <Audio audio={props.phonetic.audio} />
      {props.phonetic.text}
    </div>
  );
}
