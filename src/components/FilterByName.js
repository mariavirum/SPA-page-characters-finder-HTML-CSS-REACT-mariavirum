import gif from "../images/gif11.gif";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleEvent = (ev) => {
    props.handleInput({
      key: "name",
      value: ev.target.value,
    });
  };

  return (
    <div className="formName-container">
      <label className="formLabelName" htmlFor="name">
        Busca aquí:
        <img className="formGif" src={gif} alt="Rick y Morty" />
      </label>
      <input
        className="formNameInput"
        id="name"
        type="text"
        name="name"
        value={props.name}
        placeholder="Escribe un nombre"
        onChange={handleEvent}
      />
    </div>
  );
};

FilterByName.propTypes = {
  name: PropTypes.string,
};
export default FilterByName;
