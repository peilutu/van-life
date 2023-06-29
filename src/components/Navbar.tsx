import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        VANLIFE!
      </Link>
      <div className="links">
        <Link to="/About">About</Link>
        <Link to="/Vans">Vans</Link>
      </div>
    </nav>
  );
};

export default navbar;
