import { useCoffeeContext } from "../context/CoffeeContext";

export default function ComparePage() {
  const { compareList, toggleCompare } = useCoffeeContext();

  if (compareList.length === 0) {
    return (
      <h1 className="text-center mt-5">Nessun prodotto da confrontare.</h1>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Confronto Prodotti</h2>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="my-comp-table">Nome</th>
              {compareList.map((p) => (
                <th key={p.id}>{p.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Categoria</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.category}</td>
              ))}
            </tr>
            <tr>
              <td>
                <strong>Origine</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.origine}</td>
              ))}
            </tr>
            <tr>
              <td>
                <strong>Intensità</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.intensita}/10</td>
              ))}
            </tr>
            <tr>
              <td>
                <strong>Caffeina</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.caffeina}mg</td>
              ))}
            </tr>
            <tr>
              <td>
                <strong>Prezzo</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.prezzo}€ /kg</td>
              ))}
            </tr>
            <tr>
              <td>
                <strong>Tostatura</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.tostatura}</td>
              ))}
            </tr>
            <tr>
              <td>
                <strong>Rimuovi</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>
                  <button
                    onClick={() => toggleCompare(p.id)}
                    className="btn btn-danger"
                  >
                    Rimuovi
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
