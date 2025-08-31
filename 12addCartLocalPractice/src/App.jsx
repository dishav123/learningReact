import { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ProductCard from "./components/ProductCard";
import { InventoryProvider } from "./contexts/InventoryContext";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  const updateProduct = (id, product) => {
    setProducts((prev) =>
      prev.map((prevProduct) => (prevProduct.id === id ? product : prevProduct))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((prevData) => prevData.id !== id));
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
    <InventoryProvider
      value={{ addProduct, updateProduct, deleteProduct, products }}
    >
      <div className="gap-y-2 flex">
        <InputForm />
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </InventoryProvider>
  );
}

export default App;
