import { useCoffeeContext } from "../context/CoffeeContext";
import CoffeCard from "../components/CoffeCard";
export default function FavouriteList() {
  const { favouriteCoffee } = useCoffeeContext();
  return (
    <div className="mt-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-between">
      {favouriteCoffee.length === 0 ? (
        <h2>La tua lista è vuota</h2>
      ) : (
        favouriteCoffee.map((c, i) => (
          <div className="col" key={i}>
            <CoffeCard title={c.title} category={c.category} id={c.id} />
          </div>
        ))
      )}
    </div>
  );
}
