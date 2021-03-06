import PropTypes from "prop-types";

const FilterBySpecie = (props) => {
  const handleEvent = (ev) => {
    props.handleInput({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <div className="formSpecie-container">
      <label className="formLabelSpecie" htmlFor="species">
        Especie:
      </label>
      <select
        className="formSpecieInput"
        id="species"
        type="text"
        name="species"
        value={props.species}
        onChange={handleEvent}
      >
        <option value="all">Todos</option>
        <option value="Human">Humanos</option>
        <option value="Alien">Alienígenas</option>
      </select>
    </div>
  );
};

FilterBySpecie.propTypes = {
  species: PropTypes.string,
};
export default FilterBySpecie;
