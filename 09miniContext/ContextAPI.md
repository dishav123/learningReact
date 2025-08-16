### Step 1: Create a Context:

Why do we create a context?

First of all, what is context? Any information that is to be passed to the child components is known as context. So, if we have to pass the user details to its child components, we create a `userContext` . Similarly, this applies to other contexts as well.

```jsx
import React from "react";

const userContext=React.createContext();

export default userContext;
```

## First piece: `UserContext.Provider`

- **What it is**:
    
    When you create a context with `createContext()`, React gives you **two things**:
    
    1. `UserContext.Provider` → A special wrapper component that **supplies a value** to all descendants.
    2. `UserContext.Consumer` 
- **What it does**:
    
    Think of `Provider` like a **faucet**.
    
    - You attach it at some point in your component tree.
    - You give it a `value` (in your case `{ user, setUser }`).
    - Every child below can turn on a **tap** (`useContext(UserContext)`) and drink the same water.

## Step 2: Create a provider:

```jsx
import React, { useState } from "react";
import userContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user,setUser]=useState(null);
    return(
        <userContext.Provider value={{user,setUser}}>
        {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;
```

`UserContextProvider` The function is defined with a parameter called `children`. Think of `children` like the `Outlet` concept you learned earlier — it represents whatever components are wrapped inside the `UserContextProvider`. Those components get rendered in that spot. The `[user, setUser]` acts as the global state or shared information, which is passed down as the `value` to all of those children.

```jsx
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
```

Login and profile are the children that can use the context passed as a value.

## Using Context: Send.

```jsx
import { useState, useContext } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}=useContext(userContext);

  const handleSubmit = () => {
    setUser({username,password});
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
```

useContext State is used to get the context out of the userContext.

## Using Context: Get.

```jsx
import userContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
    const {user}=useContext(userContext);
    if (!user) return <p>Please! Login</p>
    return <div>Welcome {user.username}</div>

}

export default Profile;
```

Summary:
UserContext.js: Creates the empty box label.
UserContextProvider.jsx: Owns the box (user) and the key (setUser). Shares both.
main.jsx: Wraps your whole app with the Provider so everyone can reach the box.
Login.jsx: Controlled inputs. On submit → puts { username, password } into the box.
Profile.jsx: Opens the box. If user exists → shows “Welcome, {username}”.