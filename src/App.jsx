import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoffeeDetails from "./pages/CoffeeDetails";
import CoffeeList from "./pages/CoffeeList";
import DefaultLayout from "./layouts/DefaultLayout";
import FavouriteList from "./pages/FavouriteList";
import DetailsUs from "./pages/DetailsUs";
import { CoffeeProvider } from "./context/CoffeeContext";

export default function App() {
  return (
    <BrowserRouter>
      <CoffeeProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<CoffeeList />} />
            <Route path="/coffees/:id" element={<CoffeeDetails />} />
            <Route path="/coffees/favourite" element={<FavouriteList />} />
            <Route path="/details" element={<DetailsUs />} />
          </Route>
        </Routes>
      </CoffeeProvider>
    </BrowserRouter>
  );
}
