function ProductCard({ product }) {

  return (
    <div className="">
      <div className="w-[200px] h-[15em] bg-gray-200 m-4 p-4 rounded-[12px] flex flex-col justify-between items-center">
        <div className=" bg-gray-300 w-[95%] h-[50%] rounded-[8px]"></div>
        <div className="flex flex-col"> 
          <div className="text-2xl">{product.title}</div>
          <div className="text-green-700">{product.price}</div>
          <div>{product.description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;