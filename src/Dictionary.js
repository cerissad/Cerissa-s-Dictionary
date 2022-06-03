import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [result, setResult] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
    console.log(apiURL);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function handleKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword} />
      </form>
      <Result results={result} />
    </div>
  );
}
