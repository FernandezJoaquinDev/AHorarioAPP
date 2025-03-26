import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <div
      className={`card container-fluid ${darkMode ? "bg-dark text-light" : ""}`}
    >
      <div className="card-body d-flex justify-content-end">
        <span className="text">Contactenos</span>
        <span className={`text ms-2 ${darkMode ? "" : "text-muted"}`}>
          AHorarioApp
        </span>
      </div>
    </div>
  );
};

export default Footer;
