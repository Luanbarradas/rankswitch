import React, { useState } from "react";

export const Form = () => {
  const [position, setPosition] = useState("");
  const [currentPolo, setCurrentPolo] = useState("");
  const [targetPolo, setTargetPolo] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (!position || !currentPolo || !targetPolo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você deve implementar a lógica de cálculo baseada nas diferenças entre polos
    // Para simplificação, estou apenas mostrando uma mensagem com os dados
    const calculatedPosition = `Você ficou na posição ${position} no ${currentPolo}. No polo ${targetPolo}, sua posição estimada será calculada aqui.`;

    setResult(calculatedPosition);
  };

  return (
    <div className="container">
      <h1>RankSwitch</h1>
      <form>
        <label htmlFor="position">Posição:</label>
        <input
          type="number"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />

        <label htmlFor="currentPolo">Polo:</label>
        <select
          id="currentPolo"
          value={currentPolo}
          onChange={(e) => setCurrentPolo(e.target.value)}
          required
        >
          <option value="">Selecione o polo</option>
          <option value="polo1">Polo 1</option>
          <option value="polo2">Polo 2</option>
          <option value="polo3">Polo 3</option>
          {/* Adicione mais opções conforme necessário */}
        </select>

        <label htmlFor="targetPolo">Outros Polos:</label>
        <select
          id="targetPolo"
          value={targetPolo}
          onChange={(e) => setTargetPolo(e.target.value)}
          required
        >
          <option value="">Selecione o polo</option>
          <option value="polo1">Polo 1</option>
          <option value="polo2">Polo 2</option>
          <option value="polo3">Polo 3</option>
          {/* Adicione mais opções conforme necessário */}
        </select>

        <button type="button" onClick={handleSubmit}>
          Calcular
        </button>
      </form>

      {result && <div className="result">{result}</div>}
    </div>
  );
};
