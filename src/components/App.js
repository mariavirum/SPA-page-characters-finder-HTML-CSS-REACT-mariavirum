import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import Footer from "./Footer";
// import userEvent from "@testing-library/user-event";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("all");

  //LLamada a API
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleInput = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "species") {
      setSpecies(inputChange.value);
    }
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

  const filterCharacter = characters
    .filter((character) => {
      orderName();
      return character.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((character) => {
      if (species === "all") {
        return true;
      } else {
        return character.species === species;
      }
      // return species === "all" ? true : character.species === species;
    });

  const renderDetail = (props) => {
    const idUrl = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === idUrl;
    });
    return <CharacterDetail character={selectCharacter} />;
  };

  //Para que se ejecute cuando estemos en ruta Home #/
  const renderHome = (props) => {
    return (
      <>
        <Filters handleInput={handleInput} name={name} species={species} />
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
        </Switch>
      </main>
      <Footer />
    </>
  );
};
export default App;
