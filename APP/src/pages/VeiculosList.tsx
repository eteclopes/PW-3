import { useEffect, useState } from "react";
import { getVeiculos } from "../services/veiculoService";
import type { Veiculo } from "../types/veiculo";
import { VeiculoCard } from "../components/VeiculoCard";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
  }, []);

  return (
    <div>
      <h1>Lista de Veículos</h1>

      {veiculos.map((veiculo) => (
        <VeiculoCard key={veiculo.id} veiculo={veiculo} />
         
      ))}
    </div>
  );
}
