import { useState } from "react";
import { useInventory } from "../contexts/InventoryContext";

function ProductCard({ product }) {
  const { updateProduct } = useInventory();
  const [isProductEditable, setIsProductEditable] = useState(false);
  const [description, setDescription] = useState(product.description);
  const [price, SetPrice] = useState(product.price);
  const [title, setTitle] = useState(product.title);

  const handleSave = () => {
    setIsProductEditable(!isProductEditable);
    updateProduct(product.id, { ...product, title, price, description: description });
    console.log(product.id)
  };

  return (
    <div className="">
      <div className="w-[200px] h-[15em] bg-gray-200 m-4 p-4 rounded-[12px] flex flex-col justify-between items-center">
        <div className=" bg-gray-300 w-[95%] h-[50%] rounded-[8px]"></div>
        <div className="flex flex-col">
          {/* <div className="text-2xl">{product.title}</div>
          <div className="text-green-700">{product.price}</div> 
          <div>{product.description}</div> */}
          <input
            type="text"
            value={title}
            readOnly={!isProductEditable}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="outline-none"
          />
          <input
            type="text"
            value={price}
            readOnly={!isProductEditable}
            onChange={(e) => {
              SetPrice(e.target.value);
            }}
          />
          <input
            type="text"
            value={description}
            readOnly={!isProductEditable}
            className="outline-none"
            onChange={(e) => setDescription(e.target.value)}
          />

          {isProductEditable ? (
            <button
              className="w-full bg-blue-400 text-white p-1 my-2 rounded-2xl"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="w-full bg-blue-400 text-white p-1 my-2 rounded-2xl"
              onClick={() => setIsProductEditable(!isProductEditable)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
