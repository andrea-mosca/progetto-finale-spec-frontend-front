import { useState, useEffect } from "react";
import CoffeCard from "../components/CoffeCard";
import { useCoffeeContext } from "../context/CoffeeContext";

export default function CoffeList() {
  const { coffee } = useCoffeeContext();
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredCoffee, setFilteredCoffee] = useState([]);

  useEffect(() => {
    const filtered = coffee.filter((c) =>
      c.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setFilteredCoffee(filtered);
  }, [coffee, searchTitle]);

  return (
    <div className="container min-vh-100">
      <div className="d-flex">
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
      </div>
      <h1 className="mt-5">Elenco dei caffe</h1>
      <div className="mt-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 gap-2 justify-content-between">
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
