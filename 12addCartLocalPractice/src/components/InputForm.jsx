import { useState } from "react";

function InputForm({ addProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if ((!title || !price || !description)) return;
    addProduct({ title, price, description });
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="">
      <input
        className="border-2 p-2 mx-2 rounded-2xl"
        placeholder="Enter your product title"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <input
        className="border-2 p-2 mx-2 rounded-2xl"
        placeholder="Price Details"
        value={price}
        type="text"
        onChange={(e) => setPrice(e.target.value)}
      ></input>

      <input
        className="border-2 p-2 mx-2 rounded-2xl"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button
        className="bg-blue-500 border-2 border-white p-3 rounded-2xl"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default InputForm;
