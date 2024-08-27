import { useState } from "react";
import Box from "./Components/Box";

const App = () => {
  const[squares,setsquares]=useState(Array(9).fill(null))

  return (
    <>
      <div>
        <Box value={squares[0]} />
        <Box value={squares[1]} />
        <Box value={squares[2]} />
      </div>
      <div>
        <Box value={squares[4]} />
        <Box value={squares[5]} />
        <Box value={squares[6]} />
      </div>
      <div>
        <Box value={squares[7]} />
        <Box value={squares[8]} />
        <Box value={squares[9]} />
      </div>
    </>
  );
};

export default App;
