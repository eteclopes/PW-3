export function ListaVazia() {
  return (
    <>
      <style>{`
        .empty {
          width: 100%;
          text-align: center;
          padding: 60px 20px;
          color: #000000ff;
        }

        .empty h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #010102ff;
        }

        .empty p {
          font-size: 0.95rem;
        }
      `}</style>

      <div className="empty">
        <h2>Nenhum veículo encontrado</h2>
        <p>Tente buscar com outros filtros ou volte mais tarde.</p>
      </div>
    </>
  );
}