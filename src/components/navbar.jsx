import React from "react";

//Stateless Functional Component
const NavBar = props =>{
  console.log('NavBar - Renderd')

  return (
    <nav className="navbar navbar-light bg-light">
      <a href="in.html" className="navbar-brand">
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
