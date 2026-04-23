  import type { Veiculo } from "../types/veiculo";

  interface Props {
    veiculo: Veiculo;
  }

  export function VeiculoCard({ veiculo }: Props) {
    return (
      <div className="card">
        {veiculo.fotos.length > 0 && (
          <img
            src={veiculo.fotos[0]}
            alt={veiculo.modelo}
            className="card-img"
          />
        )}

        <div className="card-content">
          <h2>{veiculo.modelo}</h2>
          <p className="descricao">{veiculo.descricao}</p>

          <div className="info">
            <span>Ano: {veiculo.ano}</span>
            <span>Modelo: {veiculo.ano_modelo}</span>
          </div>

          <p className="fabricante">Fabricante: {veiculo.Fabricantes_id}</p>

          <strong className="preco">R$ {veiculo.valor}</strong>
        </div>
      </div>
    );
  }