import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import React, { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";

// import UserDetail from './UserDetail';
import getDataFromApi from "../services/getDataFromApi";

console.log(getDataFromApi());
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleInput = (inputValue) => {
    setName(inputValue);
  };

  const filterCharacter = characters.filter((character) => {
    return character.name.toUpperCase().includes(name.toUpperCase());
  });

  return (
    <div className="page-container">
      <header className="header-container"></header>
      <main className="main-container">
        <h1 className="main-title">Tus personajes favoritos</h1>
        <Filters handleInput={handleInput} />

        <CharacterList characters={filterCharacter} />
      </main>
    </div>
  );
};
export default App;
