import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <p>{props.meaning.partOfSpeech}</p>
        <h3 className="Definition">Definition:</h3>
        <p>{props.meaning.definitions[0].definition}</p>
        <div className="Definition2">
          <em>{props.meaning.definitions[0].example}</em>
        </div>

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
