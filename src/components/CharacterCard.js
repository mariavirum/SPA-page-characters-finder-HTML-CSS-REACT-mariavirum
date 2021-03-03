import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <img
        clasName="character-img"
        src={props.character.image}
        alt="imagen del personaje"
      />
      <h2 className="character-name">{props.character.name}</h2>
      <h3 className="character-specie">{props.character.species}</h3>
    </Link>
  );
};
export default CharacterCard;
