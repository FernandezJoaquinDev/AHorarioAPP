import { useState } from "react";
import Fecha from "./Components/Fecha";
import Hora from "./Components/Hora";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const cambio = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="global fuente-tokio">
      <NavBar cambio={cambio} darkMode={darkMode} />
      <div className="Fechahora d-flex justify-content-evenly ">
        <div className="card flex-fill text-center hover-caja">
          <div
            className={`card-body ${
              darkMode ? "bg-dark text-light hover-dark" : ""
            }`}
          >
            <Fecha />
          </div>
        </div>
        <div className="card flex-fill text-center hover-caja">
          <div
            className={`card-body ${
              darkMode ? "hover-dark bg-dark text-light " : ""
            }`}
          >
            <Hora />
          </div>
        </div>
      </div>
      <div id="Registro" className="text-center">
        {/* <div className="container-fluid card hover-caja"> */}
        <div
          className={`card container-fluid hover-caja ${
            darkMode ? " bg-dark text-light hover-dark" : ""
          }`}
        >
          <span className="fs-1 text-center" onClick={cambio}>
            Agregar Registro Horario
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
