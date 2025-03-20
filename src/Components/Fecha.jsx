import React, { useEffect, useState } from "react";
import "../App.css";
const Fecha = () => {
  const [fechaActual, setFechaActual] = useState(
    new Date().toLocaleDateString()
  );
  const ActualizarFecha = setFechaActual;

  useEffect(() => {
    return () => {
      ActualizarFecha(new Date().toLocaleDateString());
    };
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="fs-3 text mb-0 fw-bold">Hoy es:</p>
      <p className="fs-1 text fuente-tokio">{fechaActual}</p>
    </div>
  );
};
export default Fecha;
