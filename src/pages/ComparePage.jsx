import { useState, useEffect } from "react";
import { useCoffeeContext } from "../context/CoffeeContext";

export default function ComparePage() {
  const { compareList } = useCoffeeContext();

  if (compareList.length === 0) {
    return <p className="text-center mt-5">Nessun prodotto da confrontare.</p>;
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
                <strong>Categoria</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.category}</td>
              ))}
            </tr>
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
                <strong>Categoria</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.category}</td>
              ))}
            </tr>
            <tr>
              <td>
                <strong>Categoria</strong>
              </td>
              {compareList.map((p) => (
                <td key={p.id}>{p.category}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
