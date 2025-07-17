export default function Gallery() {
  return (
    <>
      <div className="border-2 border-blue-300 inline-block m-4 hover:border-blue-700 ">
        <a href="/photos/Headphone1.jpg">
          <img
            src="/photos/Headphone1.jpg"
            alt="headphone"
            className="w-[200px] h-[150px]"
          />
        </a>
        <h2 className="p-4 text-center">Yellow Headphone.</h2>
      </div>

      <div className="border-2 border-blue-300 inline-block m-4 hover:border-blue-700 ">
        <img
          src="/photos/Headphone2.jpg"
          alt="Black headphone"
          className="w-[200px] h-[150px]"
        />
        <h2 className="p-4 text-center">Yellow Headphone.</h2>
      </div>

      <div className="border-2 border-blue-300 inline-block m-4 hover:border-blue-700 ">
        <img
          src="/photos/Telephone1.jpg"
          alt="Telephone"
          className="w-[200px] h-[150px]"
        />
        <h2 className="p-4 text-center">Yellow Headphone.</h2>
      </div>
    </>
  );
}
