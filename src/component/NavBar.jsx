import classes from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className={classes.NavContainer}>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <h3 className={classes.navItem}> View List </h3>
        </NavLink>
        <NavLink
          to="/newItem"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <h3 className={classes.navItem}> Add to list </h3>
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
