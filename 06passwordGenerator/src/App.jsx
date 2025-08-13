import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let passTempStore = "";
    let str = "abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRESTUVWXYZ";
    numberAllowed ? (str += "0123456789") : str;
    characterAllowed ? (str += "~!@#$%^&*()_+{}[]") : str;

    for (let index = 1; index <= length; index++) {
      let charIndex = Math.floor(Math.random() * str.length);
      passTempStore += str.charAt(charIndex);
    }
    setPassword(passTempStore);
  }, [length, numberAllowed, characterAllowed]);

  const copyPassword=()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl text-center text-white my-6">
        Password Generator
      </h1>
      <div className="h-[10em] w-[30em] bg-white rounded-2xl flex flex-col items-center">
        <div className="h-[40%] w-[90%] flex  justify-center items-center ">
          <input
            type="text"
            value={password}
            className="border-2 px-8 py-2 m-2 rounded-2xl text-center overflow-hidden"
            placeholder="Generate Password"
            ref={passwordRef}
            readOnly
          ></input>
          <button onClick={copyPassword} className=" border-blue-500 m-2 px-2 py-2 rounded-2xl bg-blue-500 text-white text-center hover:bg-blue-600">
            Copy
          </button>
        </div>

        <div className="flex justify-around gap-x-4">
          <input
            className=""
            type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          ></input>
          <label>Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          ></input>
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          ></input>
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
