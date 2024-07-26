import React from "react";
import { polos } from "../db/Database";

type RankItem = {
  id: number;
  rank: number;
  targetPole: {
    id: number;
    local: string;
  };
};

export const Form: React.FC = () => {
  const [rank, setRank] = React.useState<number | "">("");
  const [currentPole, setCurrentPole] = React.useState<number>(0);
  const [targetPole, setTargetPole] = React.useState<number>(0);
  const [result, setResult] = React.useState<number | null>(null);
  const [rankList, setRankList] = React.useState<RankItem[]>([]); // Estado para a lista de ranques

  const handleCalculate = () => {
    const myPole = polos.find((polo) => polo.id === currentPole);
    const destinationPole = polos.find((polo) => polo.id === targetPole);

    if (myPole && destinationPole && typeof rank === "number") {
      const placementPercentage = ((rank - 1) / myPole.vacancies) * 100;
      const newPosition =
        1 + (placementPercentage * destinationPole.vacancies) / 100;
      const roundedPosition = Math.round(newPosition);
      setResult(roundedPosition);

      setRankList((prevList) => [
        ...prevList,
        {
          id: Date.now(),
          rank: roundedPosition,
          targetPole: {
            id: destinationPole.id,
            local: destinationPole.local,
          },
        },
      ]);

      setTargetPole(0);
    }
  };

  const handleRemove = (id: number) => {
    setRankList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="styled-form">
        <label className="styled-label">
          Ranque:
          <input
            className="styled-input"
            type="number"
            value={rank === "" ? "" : rank}
            onChange={(e) =>
              setRank(e.target.value === "" ? "" : Number(e.target.value))
            }
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
      <div>
        <h2>Lista de Ranques:</h2>
        {rankList.length > 0 ? (
          <ul>
            {rankList.map((item) => (
              <li key={item.id}>
                Posição {item.rank} no Polo {item.targetPole.local}
                <button onClick={() => handleRemove(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Sem ranques para exibir.</p>
        )}
      </div>
    </>
  );
};
