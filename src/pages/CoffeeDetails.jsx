import { useParams } from "react-router-dom";
import { useCoffeeContext } from "../context/CoffeeContext";
import { useEffect } from "react";

export default function CoffeDetails() {
  const { singleCoffee, fetchSingleCoffee } = useCoffeeContext();
  const { id } = useParams();
  console.log(singleCoffee);

  useEffect(() => {
    fetchSingleCoffee(id);
  }, [id]);
  if (!singleCoffee) {
    return <h1>Il tuo caffè sta caricando o non è stato trovato... </h1>;
  }
  return (
    <div className="container">
      <div className="details-card mt-5">
        <h1 className="p-3">{singleCoffee.title} </h1>
        <div className="row g-4 align-items-center">
          {/* Colonna immagine */}
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div className="ratio ratio-1x1" style={{ maxWidth: "350px" }}>
              <img
                src={`/images/${singleCoffee.image}`}
                alt={singleCoffee.title}
                className="img-fluid rounded shadow object-fit-cover"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

          {/* Colonna dettagli */}
          <div className="col-12 col-md-7">
            <p>
              <strong>Categoria:</strong> {singleCoffee.category}
            </p>
            <p>
              <strong>Origine:</strong> {singleCoffee.origine}
            </p>
            <p>
              <strong>Intensità:</strong> {singleCoffee.intensita} /10
            </p>
            <p>
              <strong>Caffeina:</strong> {singleCoffee.caffeina} mg
            </p>
            <p>
              <strong>Prezzo:</strong> {singleCoffee.prezzo} € /kg
            </p>
            <p>
              <strong>Tostatura:</strong> {singleCoffee.tostatura}
            </p>
            <p>
              <strong>Descrizione:</strong> {singleCoffee.descrizione}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
