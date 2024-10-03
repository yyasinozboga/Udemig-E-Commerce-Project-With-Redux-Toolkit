import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LogIn from "./pages/Home/LogIn";
import Home from "./pages/Home";
import FilteredProducts from "./pages/FilteredProducts/FilteredProducts";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const { isAuth } = useSelector((store) => store.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <LogIn />} />
        <Route
          path="/filtredProducts/:category"
          element={<FilteredProducts />}
        />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
