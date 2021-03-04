import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <p className="notFound-text">
        No hemos encontrado ese personaje, inténtalo con otro.
      </p>
      <Link to={"/"}>Volver</Link>
    </>
  );
};
export default NotFound;
