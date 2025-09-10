import { useState, useMemo } from "react";
import CoffeCard from "../components/CoffeCard";
import { useCoffeeContext } from "../context/CoffeeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CoffeList() {
  const { coffee } = useCoffeeContext();
  const [searchTitle, setSearchTitle] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");

  const filteredCoffee = useMemo(() => {
    let result = [...coffee];
    // filtro per categoria
    if (categoryFilter) {
      result = result.filter(
        (c) => c.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    // filtro per titolo
    if (searchTitle) {
      result = result.filter((c) =>
        c.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    // ordinamento
    result.sort((a, b) => {
      const sortA = a[sortBy].toLowerCase();
      const sortB = b[sortBy].toLowerCase();
      if (sortA < sortB) return sortOrder === "asc" ? -1 : 1;
      if (sortA > sortB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return result;
  }, [coffee, searchTitle, categoryFilter, sortOrder, sortBy]);

  // creazione array per generare le option della select
  const categories = useMemo(() => {
    return Array.from(new Set(coffee.map((c) => c.category)));
  }, [coffee]);

  return (
    <div className="container min-vh-100">
      <h1 className="mt-5">Elenco dei caffe</h1>

      <div className="">
        <div>
          <label htmlFor="search" className="form-label text-white fs-5">
            cerca il nome di un caffè:
          </label>
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="es: Honduras Marcala"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category" className="form-label text-white fs-5">
            seleziona una categoria
          </label>
          <select
            name="category"
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">seleziona una categoria</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="sortby" className="form-label text-white fs-5">
          scegli il tipo di ordinamento
        </label>
        <select
          name="sortby"
          className="form-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="title">Ordina per titolo</option>
          <option value="category">Ordina per categoria</option>
        </select>

        <label htmlFor="sortorder" className="form-label text-white fs-5">
          scegli l'ordine di ordinamento
        </label>
        <select
          name="sortorder"
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">ascendente</option>
          <option value="desc">discendente </option>
        </select>
        {sortOrder === "asc" ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </div>

      <div className="mt-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-between">
        {filteredCoffee &&
          filteredCoffee.map((c, i) => (
            <div className="col" key={i}>
              <CoffeCard title={c.title} category={c.category} id={c.id} />
            </div>
          ))}
      </div>
    </div>
  );
}
