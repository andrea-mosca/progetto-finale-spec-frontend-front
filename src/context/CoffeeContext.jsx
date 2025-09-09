import { createContext, useContext } from "react";
import useCoffee from "../hooks/UseCoffee";

const CoffeeContext = createContext();

function CoffeeProvider({ children }) {
  const coffeeData = useCoffee();

  return (
    <CoffeeContext.Provider value={{ ...coffeeData }}>
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
