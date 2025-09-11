import { useState, useEffect, useCallback } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
export default function useCoffee() {
  const [coffee, setCoffee] = useState([]);
  const [singleCoffee, setSingleCoffee] = useState([]);

  // chiamata coffee list
  useEffect(() => {
    const fetchCoffee = async () => {
      try {
        const response = await fetch(`${apiUrl}/coffees`);
        const data = await response.json();
        setCoffee(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoffee();
  }, []);
  // funzione per singolo elemento
  const fetchSingleCoffee = useCallback(async (id) => {
    try {
      const response = await fetch(`${apiUrl}/coffees/${id}`);
      const data = await response.json();
      setSingleCoffee(data.coffee);
      return singleCoffee;
    } catch (err) {
      console.error(err);
      return null;
    }
  });

  return {
    coffee,
    setCoffee,
    fetchSingleCoffee,
    singleCoffee,
  };
}
