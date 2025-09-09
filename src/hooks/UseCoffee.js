import { useState, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
export default function UseCoffee() {
  const [coffee, setCoffee] = useState([]);
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
  return { coffee, setCoffee };
}
