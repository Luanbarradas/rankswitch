import React from "react";
import { polos, Polo } from "../db/Database";

export const Form: React.FC = () => {
  const [position, setPosition] = React.useState<number | "">("");
  const [currentPole, setCurrentPole] = React.useState<string>("");
  const [targetPole, setTargetPole] = React.useState<string>("");

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  const handleCurrentPoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentPole(e.target.value);
  };

  const handleTargetPoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetPole(e.target.value);
  };

  return (
    <form>
      <label htmlFor="position">Posição</label>
      <input
        type="number"
        id="position"
        min="1"
        value={position}
        onChange={handlePositionChange}
        required
      />
      <label htmlFor="currentPole">Escolha o polo atual:</label>
      <select
        id="currentPole"
        value={currentPole}
        onChange={handleCurrentPoleChange}
      >
        <option value="">Selecione um polo</option>
        {polos.map((polo: Polo) => (
          <option key={polo.value} value={polo.value}>
            {polo.value}
          </option>
        ))}
      </select>
      <label htmlFor="targetPole">Escolha o polo de destino:</label>
      <select
        id="targetPole"
        value={targetPole}
        onChange={handleTargetPoleChange}
      >
        <option value="">Selecione um polo</option>
        {polos.map((polo: Polo) => (
          <option key={polo.value} value={polo.value}>
            {polo.value}
          </option>
        ))}
      </select>
    </form>
  );
};
