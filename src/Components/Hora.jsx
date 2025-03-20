import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";

const Hora = () => {
  const [horaActual, setHoraActual] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const actualizarHora = setHoraActual;
    const intervalo = setInterval(
      () => actualizarHora(new Date().toLocaleTimeString()),
      100
    );
    return () => clearInterval(intervalo);
  }, [1000]);

  return (
    <div>
      <p className="fs-3 text mb-0 fw-bold">Hora Actual:</p>
      <p className="fs-1 text ">{horaActual}</p>
    </div>
  );
};

export default Hora;
