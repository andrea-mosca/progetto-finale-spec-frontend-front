import CoffeCard from "../components/CoffeCard";
import { useCoffeeContext } from "../context/CoffeeContext";

export default function CoffeList() {
  const { coffee } = useCoffeeContext();
  console.log(coffee);

  return (
    <div>
      <h1>Elenco dei caffe</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gap-2 justify-content-center">
        {coffee &&
          coffee.map((c, i) => (
            <div className="col" key={i}>
              <CoffeCard title={c.title} category={c.category} />
            </div>
          ))}
      </div>
    </div>
  );
}
