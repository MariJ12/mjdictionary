import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[0]) {
    return (
      <section className="Synonyms">
        <strong>Synonyms:</strong>
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}
