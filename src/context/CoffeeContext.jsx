import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import useCoffee from "../hooks/useCoffee";

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
  const coffeeData = useCoffee();

  // leggo i COMPARATI al primo render con localStorage
  const [compareList, setCompareList] = useState(() => {
    try {
      const storedCompare = localStorage.getItem("compareList");
      return storedCompare ? JSON.parse(storedCompare) : [];
    } catch (err) {
      console.error(err);
      return [];
    }
  });

  // leggo i PREFERITI al primo render con localStorage
  const [favouriteCoffee, setFavouriteCoffee] = useState(() => {
    try {
      const storedFavs = localStorage.getItem("favouriteCoffee");
      return storedFavs ? JSON.parse(storedFavs) : [];
    } catch (err) {
      console.error(err);
      return [];
    }
  });
  //  Ogni volta che compareList cambia, salvo in localStorage
  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }, [compareList]);
  //  Ogni volta che favouriteCoffee cambia, salvo in localStorage
  useEffect(() => {
    localStorage.setItem("favouriteCoffee", JSON.stringify(favouriteCoffee));
  }, [favouriteCoffee]);

  // funzione aggiunta/rimozioni elemento ai preferiti
  const toggleFavourite = useCallback((item) => {
    setFavouriteCoffee((prev) =>
      prev.some((fav) => fav.id === item.id)
        ? prev.filter((fav) => fav.id !== item.id)
        : [...prev, item]
    );
  }, []);
  // funzione aggiunta/rimozioni elemento al comparatore

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
