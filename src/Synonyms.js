import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
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
