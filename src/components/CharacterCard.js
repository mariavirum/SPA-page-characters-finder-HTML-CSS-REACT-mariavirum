const CharacterCard = (props) => {
  return (
    <>
      <img
        clasName="character-image"
        src={props.character.image}
        alt="imagen del personaje"
      />
      <h3 className="character-name">{props.character.name}</h3>
      <h4 className="character-specie">{props.character.species}</h4>
    </>
  );
};
export default CharacterCard;
