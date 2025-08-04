import { useState } from "react";

export default function LoginPage() {
  const [sender, setSender] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChanges=(e)=>{
    const {name,value}=e.target;
    setSender((prev)=>({...prev,[name]:value}))
  }

  const handleSubmit=()=>{
    console.log(sender);
  }


  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="bg-gray-100 h-[70%] w-[60%] rounded-2xl flex justify-end">
        <div className="bg-gray-200 h-[100%] w-[40%] flex flex-col justify-center items-center rounded-2xl ">
          <div className="flex flex-wrap flex-col items-start m-2 w-fit">
            <label>Name</label>
            <input
              className="border-2 rounded-[8px] mt-1 px-3"
              placeholder="Enter your name"
            ></input>
          </div>

          <div className="flex flex-wrap flex-col items-start m-2 w-fit">
            <label>Email</label>
            <input
              className="border-2 rounded-[8px] mt-1 px-3"
              placeholder="Enter your email"
              name="Email"
              value={sender.Email}
              onChange={handleChanges}
            ></input>
          </div>

          <div className="flex flex-wrap flex-col items-start m-2 w-fit">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              value={sender.Password}
              className="border-2 rounded-[8px] mt-1 px-2"
              placeholder="Enter your password"
              onChange={handleChanges}
            ></input>
          </div>

          <div className="flex flex-col items-start m-2 w-fit ">
            <button
              className="border-2 w-50 bg-blue-500 text-white rounded-[8px]"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        {/* <div className="flex justify-start">
          <h1 className="text-3xl">Login Page</h1>
        </div>
        
        <div className="flex flex-wrap flex-col items-start m-2">
          <label>Name</label>
          <input
            className="border-2 border-gray-600 rounded-[8px] px-2"
            placeholder="Enter your name?"
          ></input>
        </div>

        <div className="flex flex-col items-start m-2">
          <label>Email</label>
          <input
            className="border-2 border-gray-600 rounded-[8px] px-2 mt-1"
            placeholder="Enter your email"
            type="text"
          ></input>
        </div>

        <div className="flex flex-col items-start m-2">
          <label>Email</label>
          <input
            className="border-2 border-gray-600 rounded-[8px] px-2 mt-1"
            placeholder="Enter your password"
            type="password"
          ></input>
        </div>
        
        <div className="flex flex-col items-start m-2">
          <button className="border-2 border-gray-600 px-4">Submit</button>
        </div> */}
      </div>
    </div>
  );
}
