import React, { useState } from "react";
import { Registro } from "../classes/registro";
import "../styles/ModalRegistro.css";
import "../App.css";

const ModalRegistro = ({ modal, cambioModal, horaRegis, fechaRegis }) => {
  const [datos, setDatos] = useState({
    nombre: "",
    codigo: "",
    estado: "entrada",
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const probar = () => {
    console.log(datos);
  };

  return (
    <div className="card tamañoModal">
      <span className="btn btn-danger" onClick={cambioModal}>
        Cerrar
      </span>

      <div className="contenido-Modal card-body">
        <div className="container"></div>
        <div>
          <input
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            className="input-group mb-3 text-center fs-3"
            placeholder="Coloque Su Nombre Completo"
          />
        </div>
        <div>
          <input
            type="text"
            name="codigo"
            value={datos.codigo}
            onChange={handleChange}
            className="input-group mb-3 text-center fs-2"
            placeholder="Coloque Su Codigo De Empleado"
          />
        </div>

        <div className="mb-3">
          <select
            name="estado"
            value={datos.estado}
            onChange={handleChange}
            className="fs-3"
          >
            <option value="entrada">Entrada</option>
            <option value="salida">Salida</option>
          </select>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <p className="fuente-tokio fs-3">{horaRegis}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <p className="fuente-tokio fs-3">{fechaRegis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="btn btn-secondary btn-lg fs-4" onClick={probar}>
          Ingresar
        </span>
      </div>
    </div>
  );
};

export default ModalRegistro;
