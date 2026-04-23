import { useEffect, useState } from "react";
import { getVeiculos } from "../services/veiculoService";
import type { Veiculo } from "../types/veiculo";
import { VeiculoCard } from "../components/VeiculoCard";
import { ListaVazia } from "./ListaVazia"

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
  }, []);

  return (
    <>
      <style>{`
        body {
          background: #0f1115;
          color: #e5e7eb;
          font-family: Arial, sans-serif;
        }

        .container {
          padding: 30px;
        }

        h1 {
          margin-bottom: 20px;
        }

        .grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .card {
          width: 280px;
          flex-shrink: 0;
        }

        .card-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
      `}</style>

      <div className="container">
        <h1>Lista de Veículos</h1>

        {veiculos.length === 0 ? (
          <ListaVazia />
        ) : (
          <div className="grid">
            {veiculos.map((veiculo) => (
              <VeiculoCard key={veiculo.id} veiculo={veiculo} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}