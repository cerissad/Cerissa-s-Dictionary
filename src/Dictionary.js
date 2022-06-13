import React, { useState } from "react";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
    //console.log(apiURL);

    let pexelKey = "563492ad6f91700001000001ac29b559182e46759e93d255d66e4f28";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelKey}` };
    axios.get(pexelUrl, { headers: headers }).then(handlePexelresponse);
  }

  function handleResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function handlePexelresponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2 className="Formheader">What word are you looking for?</h2>

        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={handleKeyword} />
        </form>
      </section>

      <Result results={result} />
      <Photos photos={photos} />
    </div>
  );
}
