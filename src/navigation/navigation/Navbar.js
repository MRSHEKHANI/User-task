import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <h1 className="nav-hero">{props.title} </h1>
      <Link to="/create">Create user</Link>
    </div>
  );
};

Navbar.defaultProps = {
  title: "User Interface",
};

export default Navbar;
