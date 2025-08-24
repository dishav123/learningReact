import { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  useEffect(() => {
    const productsLocal = JSON.parse(localStorage.getItem("product"));
    if (productsLocal && productsLocal.length > 0) {
      setProducts(productsLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(products));
  }, [products]);

  return (
    <div className="gap-y-2 flex">
      <InputForm addProduct={addProduct} />
      {products.map((product) => (
        <div>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default App;
