import { Outlet, NavLink } from "react-router-dom";

const HostNavbar = () => {
  // const activeStyle = {
  //   backgroundColor: "lightyellow",
  // };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          // style={({ isActive }) => (isActive ? activeStyle : null)}
          className={({ isActive }) => (isActive ? "myLink" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "myLink" : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? "myLink" : null)}
        >
          Reviews
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) => (isActive ? "myLink" : null)}
        >
          Vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostNavbar;
