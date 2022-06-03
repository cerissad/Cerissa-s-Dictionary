import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Cerissa's Dictionary</header>
        <Dictionary />
      </div>
      <footer className="App-footer">
        Code source
        <a href="https://github.com/cerissad/Cerissa-s-Dictionary">
          &nbsp;here&nbsp;
        </a>{" "}
        by Cerissa De Ocampo
      </footer>
    </div>
  );
}

export default App;
