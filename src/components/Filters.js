function Filters(props) {
  const handleEvent = (ev) => {
    props.handleInput(ev.target.value);
  };

  return (
    <section>
      <form className="form-container">
        <label for="name">Busca aquí:</label>
        <input id="name" type="text" name="name" onChange={handleEvent} />
      </form>
    </section>
  );
}
export default Filters;
