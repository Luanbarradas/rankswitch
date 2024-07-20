import React, { useState } from "react";
import { polos, Polo } from "../db/Database";

export const Form = () => {
  const [selectedPolo, setSelectedPolo] = useState("");

  const handleChange = (e) => {
    setSelectedPolo(e.target.value);
  };

  return (
    <form>
      <label htmlFor="posicao">Posição</label>
      <input type="number" id="position" min="1" required />
      <label htmlFor="polo">Escolha o polo:</label>
      <select id="polo" value={selectedPolo} onChange={handleChange}>
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
