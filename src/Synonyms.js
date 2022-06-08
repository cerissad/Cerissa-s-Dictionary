import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length > 0) {
    return (
      <ul className="Syn">
        Synonym(s):
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}> {synonym}, </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
