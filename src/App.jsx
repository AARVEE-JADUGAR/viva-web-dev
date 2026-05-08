import React from "react";
import child from "./component/child";



function App() {
  const name = "Tarun";
  const age = 21;

  return (
    <div>
      <h1>Parent Component</h1>

      
      <Child name={name} age={age} />
    </div>
  );
}

export default App;