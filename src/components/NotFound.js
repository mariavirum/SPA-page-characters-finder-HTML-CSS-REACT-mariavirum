import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound-container">
      <p className="notFound-title">
        No hemos encontrado ese personaje, inténtalo con otro.
      </p>
      {/* <img
        className="NotFoundImage"
        // src="../images/gif2.gif"
        title="No hemos encontrado al personaje"
        alt="poor Morty"
      /> */}
      <Link to="/">
        {/* <span className="icon fas fa-times"></span> */}
        HOLA
      </Link>
    </section>
  );
};
export default NotFound;
