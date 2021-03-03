const CharacterCard = (props) => {
  return (
    <>
      <img
        clasName="character-image"
        src={props.character.image}
        alt="imagen del personaje"
      />
      <h2 className="character-name">{props.character.name}</h2>
      <h3 className="character-specie">{props.character.species}</h3>
    </>
  );
};
export default CharacterCard;
