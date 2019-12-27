import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [total /* setTotal */] = useState(0);
  return (
    <div className='form'>
      <h1>Total: ${total} </h1>
    </div>
  );
};

export default App;
