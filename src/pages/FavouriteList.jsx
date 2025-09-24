import { useCoffeeContext } from "../context/CoffeeContext";
import CoffeCard from "../components/CoffeCard";
export default function FavouriteList() {
  const { favouriteCoffee } = useCoffeeContext();
  return (
    <div className="container-fluid">
      <div className="mt-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {favouriteCoffee.length === 0 ? (
          <h1 className="text-center">La tua lista è vuota</h1>
        ) : (
          favouriteCoffee.map((c, i) => (
            <div className="col" key={i}>
              <CoffeCard title={c.title} category={c.category} id={c.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
