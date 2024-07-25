import React from "react";
import { polos } from "../db/Database";

export const Form: React.FC = () => {
  const [rank, setRank] = React.useState<number | "">("");
  const [currentPole, setCurrentPole] = React.useState<number>(0);
  const [targetPole, setTargetPole] = React.useState<number>(0);
  const [result, setResult] = React.useState<number | null>(null);

  const handleCalculate = () => {
    const myPole = polos.find((polo) => polo.id === currentPole);
    const destinationPole = polos.find((polo) => polo.id === targetPole);

    if (myPole && destinationPole && typeof rank === "number") {
      const placementPercentage = ((rank - 1) / myPole.vacancies) * 100;
      const newPosition =
        1 + (placementPercentage * destinationPole.vacancies) / 100;
      const roundedPosition = Math.round(newPosition);
      setResult(roundedPosition);

      setCurrentPole(0);
      setTargetPole(0);
    }
  };

  return (
    <div className="styled-form">
      <label className="styled-label">
        Ranque:
        <input
          className="styled-input"
          type="number"
          value={rank}
          onChange={(e) => setRank(Number(e.target.value))}
        />
      </label>
      <label className="styled-label">
        Meu Polo:
        <select
          className="styled-input"
          value={currentPole}
          onChange={(e) => setCurrentPole(Number(e.target.value))}
        >
          <option value={0}>Selecione o Polo Atual</option>
          {polos.map((polo) => (
            <option key={polo.id} value={polo.id}>
              {polo.local}
            </option>
          ))}
        </select>
      </label>
      <label className="styled-label">
        Outros Polos:
        <select
          className="styled-input"
          value={targetPole}
          onChange={(e) => setTargetPole(Number(e.target.value))}
        >
          <option value={0}>Selecione o Polo de Destino</option>
          {polos.map((polo) => (
            <option key={polo.id} value={polo.id}>
              {polo.local}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleCalculate}>Calcular</button>
      {result !== null && <p>Nova Posição: {result}</p>}
    </div>
  );
};
