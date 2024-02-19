import React, { useState, useEffect } from 'react';
import '../estilos/Contador.css';

const Contador = () => {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${numero}`;
  }, [numero]); // Actualiza el título del documento cuando cambia el número

  const aumentar = () => {
    setNumero(numero + 1);
  };

  const disminuir = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  return (
    <div className="contador">
      <h1>Contador</h1>
      <p className="numero">{numero}</p>
      <div className="botones">
        <button className="boton aumentar" onClick={aumentar}>
          Aumentar
        </button>
        <button className="boton disminuir" onClick={disminuir}>
          Disminuir
        </button>
      </div>
    </div>
  );
};

export default Contador;
