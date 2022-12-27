import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import { useEffect } from "react";
import { useAppDispatch } from "./store";
import { setCart } from "./store/features/productSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if(!cart) return;
    dispatch(setCart(JSON.parse(cart)));
  },[])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
