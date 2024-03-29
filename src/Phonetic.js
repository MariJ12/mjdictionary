import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic[0].audio} target="_blank">
          {" "}
          🔊
        </a>
        <h2>{props.phonetic}</h2>
      </div>
    );
  } else {
    return null;
  }
}
