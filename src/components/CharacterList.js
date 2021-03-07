import CharacterCard from "./CharacterCard";
import gifNotFound from "../images/gif2.gif";

const CharacterList = (props) => {
  //no cumple el includes asi que no pasa nada por props.
  if (props.characters.length === 0) {
    return (
      <>
        <section className="notFound-container">
          <p className="notFound-text">
            No hemos encontrado ese personaje, inténtalo con otro.
          </p>

          <img
            className="notFoundImage"
            src={gifNotFound}
            alt="Lo siento, busca otro personaje"
          />
        </section>
      </>
    );
  } else {
    const characterListElements = props.characters.map((character) => {
      return (
        <li className="" key={character.id}>
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
