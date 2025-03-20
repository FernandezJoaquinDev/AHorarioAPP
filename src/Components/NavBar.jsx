import React, { useState } from "react";
import { GoSun, GoMoon } from "react-icons/go";

const NavBar = ({ cambio, darkMode }) => {
  return (
    <div>
      <nav
        className={`${
          darkMode
            ? "navBar bg-dark boirder-bottom border-body text-light"
            : "navBar "
        }`}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand h1 mt-2 fs-5">AHorarioAPP</span>
          <span className="mt-1" onClick={cambio}>
            {darkMode ? <GoMoon /> : <GoSun />}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
