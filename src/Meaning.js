import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        <br />
        <h3 className="Definition">Definition:</h3>
        <p>{props.meaning.definitions[0].definition}</p>
        <em>{props.meaning.definitions[0].example}</em>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
