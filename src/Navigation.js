import "./navbar.css";

import "./navbar.css";
import { NavLink } from "react-router-dom";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const Navigation = (props) => {
  return (
    <>
      <div className="nav-bar">
        <NavLink className="a" to="/products" activeStyle={{ color: "red" }}>
          Products
        </NavLink>

        <NavLink className="a" to="/categories">
          Categories
        </NavLink>

      </div>
    </>
  );
};

export default Navigation;
