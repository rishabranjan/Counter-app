import React from "react";

const Navbar = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Total number of items</span>
        <span className="navbar-brand mb-0 h1">
          Total <span>{props}</span>
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
