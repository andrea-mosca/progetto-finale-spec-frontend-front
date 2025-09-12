import { useState, useEffect } from "react";
import { useCoffeeContext } from "../context/CoffeeContext";

export default function ComparePage() {
  const { compareList } = useCoffeeContext();

  if (compareList.length === 0) {
    return (
      <h1 className="text-center mt-5">Nessun prodotto da confrontare.</h1>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Confronto Prodotti</h2>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
