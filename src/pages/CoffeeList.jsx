import { useState, useMemo, useCallback, useEffect } from "react";
import CoffeCard from "../components/CoffeCard";
import { useCoffeeContext } from "../context/CoffeeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, delay);
  };
}

export default function CoffeList() {
  const { coffee } = useCoffeeContext();

  //  Stato "live" per l'input (aggiorna subito)
  const [inputValue, setInputValue] = useState("");
  //  Stato aggiornato solo dopo debounce
  const [searchTitle, setSearchTitle] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");
  // DEBOUNCE
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchTitle(value);
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  };
  // FILTRI
  const filteredCoffee = useMemo(() => {
    let result = [...coffee];
    if (categoryFilter) {
      result = result.filter(
        (c) => c.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    if (searchTitle) {
      result = result.filter((c) =>
        c.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    result.sort((a, b) => {
      const sortA = a[sortBy].toLowerCase();
      const sortB = b[sortBy].toLowerCase();
      if (sortA < sortB) return sortOrder === "asc" ? -1 : 1;
      if (sortA > sortB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return result;
  }, [coffee, searchTitle, categoryFilter, sortOrder, sortBy]);

  const categories = useMemo(() => {
    return Array.from(new Set(coffee.map((c) => c.category)));
  }, [coffee]);

  return (
    <div className="container min-vh-100">
      <h1 className="mt-5">Elenco dei caffe</h1>

      <div>
        <div>
          <label htmlFor="search" className="form-label text-white fs-5">
            cerca il nome di un caffè:
          </label>
          <input
            name="search"
            id="search"
            type="text"
            className="form-control"
            placeholder="es: Honduras Marcala"
            value={inputValue} // mostra subito quello che scrivi
            onChange={handleInputChange} //  aggiorna il filtro con debounce
          />
        </div>

        <div>
          <label htmlFor="category" className="form-label text-white fs-5">
            seleziona una categoria
          </label>
          <select
            name="category"
            id="category"
            className="form-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Nessun filtro</option>
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
          id="sortby"
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
          id="sortorder"
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">ascendente</option>
          <option value="desc">discendente</option>
        </select>

        {sortOrder === "asc" ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </div>

      {filteredCoffee.length > 0 ? (
        <div className="mt-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-between">
          {filteredCoffee.map((c) => (
            <div className="col" key={c.id}>
              <CoffeCard title={c.title} category={c.category} id={c.id} />
            </div>
          ))}
        </div>
      ) : (
        <h3 className="mt-3">Errore durante il caricamento dei caffè...</h3>
      )}
    </div>
  );
}
