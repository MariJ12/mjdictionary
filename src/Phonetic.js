import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} arget="_blank" rel="noreferrer">
          {" "}
          🔊
        </a>
        <h2>{props.phonetic.text}</h2>
      </div>
    );
  } else {
    return null;
  }
}
