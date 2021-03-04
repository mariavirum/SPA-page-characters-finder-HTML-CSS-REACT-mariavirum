import "../stylesheets/App.css";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");

  //LLamada a API
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleInput = (inputValue) => {
    setName(inputValue);
  };

  const orderName = () => {
    characters.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  };

  const filterCharacter = characters.filter((character) => {
    orderName();
    return character.name.toUpperCase().includes(name.toUpperCase());
  });

  const renderDetail = (props) => {
    debugger;
    const idUrl = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === idUrl;
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  //Para que se ejecute cuando estemos en ruta Home #/
  const renderHome = () => {
    return (
      <>
        <Filters handleInput={handleInput} name={name} />
        <CharacterList characters={filterCharacter} />
      </>
    );
  };
  return (
    <div className="page-container">
      <header className="header-container"></header>
      <main className="main-container">
        <h1 className="main-title">Tus personajes favoritos</h1>

        <Switch>
          <Route exact path="/" render={renderHome} />
          <Route path="/character/:id" render={renderDetail} />
          {/* DETAIL Se me pintaba debajo de la lista */}
          {/* <Filters handleInput={handleInput} />
        <CharacterList characters={filterCharacter} /> */}
        </Switch>
      </main>
    </div>
  );
};
export default App;
