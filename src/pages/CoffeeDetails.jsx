import { useParams } from "react-router-dom";
import { useCoffeeContext } from "../context/CoffeeContext";

export default function CoffeDetails() {
  const { coffee } = useCoffeeContext();
  const { id } = useParams();
  const singleCoffe = coffee.find((c) => String(c.id) === id);

  if (!singleCoffe) {
    return <h1>Il tuo caffè sta caricando o non è stato trovato... </h1>;
  }
  return (
    <div className="container">
      <h1>{singleCoffe.title}</h1>
    </div>
  );
}
