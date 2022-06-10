import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="Part">{props.meaning.partOfSpeech}</h3>

      <Synonyms synonyms={props.meaning.synonyms} />

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <br />
            <strong>Definition:</strong> {definition.definition}
            <Example example={definition.example} />
          </div>
        );
      })}
    </div>
  );
}
