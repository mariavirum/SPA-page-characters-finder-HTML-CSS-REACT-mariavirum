import gif from "../images/gif11.gif";
function Filters(props) {
  const handleEvent = (ev) => {
    props.handleInput(ev.target.value);
    ev.preventDefault();
  };

  return (
    <section>
      <form className="form-container">
        <label className="formLabel" htmlFor="name">
          Busca aquí:
          <img className="formGif" src={gif} alt="Rick y Morty" />
        </label>
        <input
          className="formInput"
          id="name"
          type="text"
          name="name"
          value={props.name}
          onChange={handleEvent}
        />
      </form>
    </section>
  );
}
export default Filters;
