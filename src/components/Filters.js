import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";

const Filters = (props) => {
  const handleDefault = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="form-section">
      <form className="form-container" onSubmit={handleDefault}>
        <FilterByName handleInput={props.handleInput} name={props.name} />
        <FilterBySpecie
          handleInput={props.handleInput}
          species={props.species}
        />
      </form>
    </section>
  );
};

export default Filters;
