import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  //LLamada a API
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

  const renderDetail = (props) => {
    const idUrl = props.match.params.id;
    const selectCharacter = characters.find((character) => {
      return character.id === idUrl;
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  return (
    <div className="page-container">
      <header className="header-container"></header>
      <main className="main-container">
        <h1 className="main-title">Tus personajes favoritos</h1>
        <Filters handleInput={handleInput} />
        <CharacterList characters={filterCharacter} />
        <Switch>
          <Route exact path="/" />
          <Route path="/character/:id" render={renderDetail} />
        </Switch>
      </main>
    </div>
  );
};
export default App;
