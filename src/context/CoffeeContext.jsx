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

  const toggleFavourite = useCallback((item) => {
    setFavouriteCoffee((prev) =>
      prev.some((fav) => fav.id === item.id)
        ? prev.filter((fav) => fav.id !== item.id)
        : [...prev, item]
    );
  }, []);
  const toggleCompare = useCallback(
    async (id) => {
      const alreadyAdded = compareList.find((p) => p.id === id);
      if (alreadyAdded) {
        setCompareList(compareList.filter((p) => p.id !== id));
      } else {
        const fullCoffee = await coffeeData.fetchSingleCoffee(id);
        if (!fullCoffee) return;
        setCompareList([...compareList, fullCoffee]);
      }
    },
    [compareList, coffeeData]
  );
  const value = useMemo(
    () => ({
      ...coffeeData,
      favouriteCoffee,
      toggleFavourite,
      compareList,
      toggleCompare,
    }),
    [coffeeData, favouriteCoffee, compareList, toggleFavourite, toggleCompare]
  );
  return (
    <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>
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
