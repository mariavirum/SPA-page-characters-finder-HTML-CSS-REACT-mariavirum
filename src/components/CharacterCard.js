import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <div>
      <Link className="card-container" to={`/character/${props.character.id}`}>
        <div style={{ width: "100%", height: "300px" }}>
          <img
            className="character-img"
            src={props.character.image}
            alt="imagen del personaje"
          />
        </div>
        <h2 className="character-name">{props.character.name}</h2>
        <h3 className="character-specie">{props.character.species}</h3>
      </Link>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default CharacterCard;
