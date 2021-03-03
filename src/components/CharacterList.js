import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
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
};
export default CharacterList;
