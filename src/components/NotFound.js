import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p className="notFound-text">
        No hemos encontrado ese personaje, inténtalo con otro.
      </p>
      <div>
        {/* <Link to="/home">
          <button className="notFound-buton">Volver</button>
        </Link> */}
      </div>
    </>
  );
};
export default NotFound;
