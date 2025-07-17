import "tailwindcss";


export default function Card() {
  return (
    <div>
      <div className="bg-white w-64 h-64 m-4 rounded-[8px] flex flex-col items-center">
        <img
          src="photos/Man.jpeg"
          alt="Man"
          className="w-56 h-32 mt-4 rounded-[4px] object-cover transition-transform duration-300 hover:scale-105"
        ></img>
        <div className="mt-2 flex ">
          <div className="w-10 h-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full text-2xl font-bold">D</div>
          <div className="flex flex-col ml-4">
            <h2 className="font-teacher ">Dishav Shrestha</h2>
            <p className="text-[12px]">Available for work</p>
          </div>
          
        </div>
        <button className="w-56 h-8 bg-blue-500 mt-4 text-white rounded-[6px] font-sans ">
          Register
        </button>
      </div>
    </div>
  );
}
