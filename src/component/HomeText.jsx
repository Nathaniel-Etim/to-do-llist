import { NavLink } from "react-router-dom";
import classes from "../component/navbar.module.css";
// import PostList from "./PostList";

const HomeText = () => {
  return (
    <>
      <div>
        <h2 className="center"> Welcome to WishKit </h2>
        <p className="center">
          <b>Note:</b> items in wish list is visible to every user of this app
        </p>
        <NavLink to="/newItem" className="btn" end>
          <p>
            <span className="btn1"> Add to list </span>
          </p>
        </NavLink>

        <NavLink
          to="/home/Posts"
          className={({ isActive }) =>
            isActive ? classes.active + " btn" : "btn"
          }
          end
        >
          <p>
            <span className="btn1"> View Wish list </span>
          </p>
        </NavLink>
      </div>
    </>
  );
};

export default HomeText;
