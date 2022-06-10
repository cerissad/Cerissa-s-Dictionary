import React from "react";
import "./Example.css";

export default function Example(props) {
  console.log(props);
  if (props.example) {
    return (
      <div className="Example">
        <em>Example:&nbsp;{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
