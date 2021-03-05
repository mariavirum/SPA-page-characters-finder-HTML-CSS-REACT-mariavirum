import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import Footer from "./Footer";

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
    <>
      <Header />
      <main className="main-container">
        <Switch>
          <Route exact path="/" render={renderHome} />
          <Route path="/character/:id" render={renderDetail} />
          {/* DETAIL Se me pintaba debajo de la lista */}
          {/* <Filters handleInput={handleInput} />
        <CharacterList characters={filterCharacter} /> */}
        </Switch>
      </main>
      <Footer />
    </>
  );
};
export default App;
