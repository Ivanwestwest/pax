import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [role, setRole] = useState(null);

  return (
    <div className="container">
      {!role && (
        <>
          <h1>Pax</h1>
          <p>Escolha uma opção:</p>
          <div className="buttons">
            <button onClick={() => setRole("cliente")}>Sou Cliente</button>
            <button onClick={() => setRole("motorista")}>Sou Motorista</button>
          </div>
        </>
      )}

      {role === "cliente" && (
        <div>
          <h2>Pedido de transporte</h2>
          <button onClick={() => setRole(null)}>Voltar</button>
        </div>
      )}

      {role === "motorista" && (
        <div>
          <h2>Ofertas disponíveis</h2>
          <button onClick={() => setRole(null)}>Voltar</button>
        </div>
      )}
    </div>
  );
}
