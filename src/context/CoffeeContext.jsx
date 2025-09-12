import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import useCoffee from "../hooks/useCoffee";

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
  const coffeeData = useCoffee();
  const [favouriteCoffee, setFavouriteCoffee] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const { fetchSingleCoffee } = coffeeData;

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
  async function toggleCompare(id) {
    const alreadyAdded = compareList.find((p) => p.id === id);
    if (alreadyAdded) {
      setCompareList(compareList.filter((p) => p.id !== id));
    } else {
      const fullCoffee = await fetchSingleCoffee(id);
      if (!fullCoffee) return;
      setCompareList([...compareList, fullCoffee]);
    }
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
