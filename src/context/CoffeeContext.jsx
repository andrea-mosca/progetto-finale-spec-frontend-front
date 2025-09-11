import { createContext, useContext, useState } from "react";
import useCoffee from "../hooks/useCoffee";

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
  const coffeeData = useCoffee();
  const [favouriteCoffee, setFavouriteCoffee] = useState([]);
  const [compareList, setCompareList] = useState([]);
  function toggleFavourite(item) {
    setFavouriteCoffee((prev) => {
      const alreadyFav = prev.find((fav) => fav.id === item.id);
      if (alreadyFav) {
        return prev.filter((fav) => fav.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }
  function toggleCompare(item) {
    setCompareList((prev) => {
      const alreadyAdded = prev.find((p) => p.id === item.id);
      if (alreadyAdded) {
        return prev.filter((p) => p.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }

  return (
    <CoffeeContext.Provider
      value={{
        ...coffeeData,
        favouriteCoffee,
        toggleFavourite,
        compareList,
        toggleCompare,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}

function useCoffeeContext() {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error("useCoffeeContext deve essere usato dentro CoffeeProvider");
  }
  return context;
}

export { CoffeeProvider, useCoffeeContext };
