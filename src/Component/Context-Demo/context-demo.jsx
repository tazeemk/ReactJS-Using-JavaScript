import { createContext, useState, useContext } from "react";

// 1. Create the context once at the top
let UserContext = createContext(null);

export function Level1() {
  // 2. Consume the context using useContext
  let context = useContext(UserContext);

  return (
    <div className="bg-success p-4 m-3 text-white">
      <h3>Level1 - {context}</h3>
      <Level2 />
    </div>
  );
}

export function Level2() {
  // 3. Consume the context using useContext
  let context = useContext(UserContext);

  return (
    <div className="bg-danger p-3 m-3 text-white">
      <h3>Level2 - {context}</h3>
    </div>
  );
}

export function ContextDemo() {
  const [userName, setUserName] = useState("john");

  return (
    <div className="container-fluid p-4 bg-dark text-white">
      {/* 4. Provide the context value at the top level */}
      <UserContext.Provider value={userName}>
        <h3>Context Demo: {userName}</h3>
        <Level1 />
      </UserContext.Provider>
    </div>
  );
}
