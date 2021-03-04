import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  //no cumple el includes asi que no pasa nada por props.
  if (props.characters.length === 0) {
    return (
      <>
        <section className="notFound-container">
          <p className="notFound-text">
            No hemos encontrado ese personaje, inténtalo con otro.
          </p>
          <div>
            <Link to="/">
              <button className="notFound-buton">Volver</button>
            </Link>
          </div>
        </section>
      </>
    );
  } else {
    const characterListElements = props.characters.map((character) => {
      // console.log(character);
      return (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      );
    });

    return (
      <section className="characterList-container">
        <ul className="characterListElements">{characterListElements}</ul>
      </section>
    );
  }
};
export default CharacterList;
