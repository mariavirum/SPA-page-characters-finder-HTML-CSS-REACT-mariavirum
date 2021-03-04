function Filters(props) {
  const handleEvent = (ev) => {
    props.handleInput(ev.target.value);
    ev.preventDefault();
  };

  return (
    <section>
      <form className="form-container">
        <label htmlFor="name">Busca aquí:</label>
        <input
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
