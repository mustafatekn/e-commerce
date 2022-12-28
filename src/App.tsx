import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import { useEffect } from "react";
import { useAppDispatch } from "./store";
import { setCart } from "./store/features/productSlice";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (!cart) return;
    dispatch(setCart(JSON.parse(cart)));
    //eslint-disable-next-line
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
