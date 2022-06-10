import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <br />
      <h3>{props.meaning.partOfSpeech}</h3>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <br />
            <strong>Definition:</strong> {definition.definition}
            <br />
            <em>{definition.example}</em>
            <br />
          </div>
        );
      })}
    </div>
  );
}
