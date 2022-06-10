import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  console.log(props.phonetic);

  return (
    <div>
      <Audio audio={props.phonetic.audio} />
      {props.phonetic.text}
    </div>
  );
}
