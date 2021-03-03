import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <>
      <section className="detail-container">
        <img
          clasName="detail-img"
          src={props.character.image}
          alt="imagen del personaje"
        />
        <h2 className="detail-name">{props.character.name}</h2>
        <h3>Especie: {props.character.species}</h3>
        <h3>Planeta: {props.character.origin.name}</h3>
        <h3>Estado: {props.character.status}</h3>
        <h3>NºEspisodios: {props.character.episode}</h3>

        <div>
          <Link to="/">
            <button className="detail-buton">Volver</button>
          </Link>
        </div>
      </section>
    </>
  );
};
export default CharacterDetail;
