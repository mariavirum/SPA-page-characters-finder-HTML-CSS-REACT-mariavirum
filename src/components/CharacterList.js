import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  //no cumple el includes asi que no pasa nada por props.
  if (props.characters.length === 0) {
    return (
      <>
        <p className="notFound-text">
          No hemos encontrado ese personaje, inténtalo con otro.
        </p>
        <div>
          {/* <Link to="/home">
        <button className="notFound-buton">Volver</button>
      </Link> */}
        </div>
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
      <section>
        <ul>{characterListElements}</ul>
      </section>
    );
  }
};
export default CharacterList;
