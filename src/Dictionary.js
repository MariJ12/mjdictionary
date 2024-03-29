import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleDictionaryResponse);

    let SheApiKey = "394b0a890obd80btf4fcd7e9d9a421d6";
    let SheApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${SheApiKey}`;

    axios.get(SheApiUrl).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
            <div>
              <em className="popularWords">
                Popular words: sunset,sunrise,kiss,sun
              </em>
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
