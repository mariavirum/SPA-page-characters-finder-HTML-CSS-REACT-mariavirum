import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import React, { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";

// import UserDetail from './UserDetail';
import getDataFromApi from "../services/getDataFromApi";
import Filters from "./Filters";

console.log(getDataFromApi());
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  return (
    <div className="page-container">
      <header className="header-container"></header>
      <main className="main-container">
        <h1 className="main-title">Tus personajes favoritos</h1>
        <Filters />

        <CharacterList characters={characters} />
      </main>
    </div>
  );
};
export default App;
