import { Link, NavLink, useParams } from "react-router-dom";
const VansNavbar = () => {
  const { id } = useParams();

  const activeStyle = {
    color: "red",
  };
  return (
    <nav>
      <NavLink
        end
        to="."
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Details
      </NavLink>
      <NavLink
        to="pricing"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default VansNavbar;
