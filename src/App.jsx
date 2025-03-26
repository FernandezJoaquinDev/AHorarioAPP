import { useState } from "react";
import Fecha from "./Components/Fecha";
import Hora from "./Components/Hora";
import NavBar from "./Components/NavBar";
import "./App.css";
import Footer from "./Components/Footer";
import ModalRegistro from "./Components/ModalRegistro";

function App() {
  const [fechaRegis, setFecharegis] = useState();
  const [horaRegis, setHoraRegis] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const cambio = () => {
    setDarkMode(!darkMode);
  };

  const [modal, setModal] = useState(false);
  const cambioModal = () => {
    setModal(!modal);
    setHoraRegis(new Date().toLocaleTimeString());
    setFecharegis(new Date().toLocaleDateString());
    const partes = fechaRegis.split("/");
    const añoRegis = partes[2].slice(-2);
    setFecharegis(`${partes[0]}/${partes[1]}/${añoRegis}`);
  };

  return (
    <div className={`${modal ? "oscurecer" : ""}`}>
      <div className={`fuente-tokio global `}>
        <div id="header">
          <NavBar cambio={cambio} darkMode={darkMode} />
        </div>
        <div id="contenido">
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
                } `}
              >
                <Hora />
              </div>
            </div>
          </div>
          <div id="Registro" className={`text-center `}>
            <div
              className={`card container-fluid hover-caja ${
                darkMode ? " bg-dark text-light hover-dark" : ""
              }  `}
            >
              <span className={`fs-1 text-center`} onClick={cambioModal}>
                Agregar Registro Horario
              </span>
              {modal && (
                <div className={`destacar`}>
                  <ModalRegistro
                    modal={modal}
                    cambioModal={cambioModal}
                    horaRegis={horaRegis}
                    fechaRegis={fechaRegis}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div id="footer" className={``}>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
