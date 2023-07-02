import { NavLink } from "react-router-dom";

const navbar = () => {
  // const activeStyle = {
  //   fontWeight: "bold",
  //   TextDecoration: "underline",
  //   color: "red",
  // };

  return (
    <nav className="nav">
      <NavLink to="/" className="logo">
        VANLIFE!
      </NavLink>
      <div className="links">
        <NavLink
          to="/Host"
          className={({ isActive }) => (isActive ? "myLink" : null)}
          // style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "myLink" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/Vans"
          className={({ isActive }) => (isActive ? "myLink" : null)}
        >
          Vans
        </NavLink>
      </div>
    </nav>
  );
};

export default navbar;
