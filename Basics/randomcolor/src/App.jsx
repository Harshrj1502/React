import { useState, useEffect } from "react";
import "./App.css";
// import Button from './Button'

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  function randomcolor(length) {
    return Math.floor(Math.random() * length);
  }

  function hexcolor() {
    const hexnumber = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += hexnumber[randomcolor(hexnumber.length)];
    }
    setColor(hex);
  }

  function rgbcolor() {
    const r = randomcolor(256);
    const g = randomcolor(256);
    const b = randomcolor(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  return (
    <>
      <div style={{ background: color, height: "100vh" }}>
        <div className="container">
          <button onClick={() => setTypeOfColor("hex")}>
            Create HEX Color
          </button>
          <button onClick={() => setTypeOfColor("rgb")}>
            Create RGB Color
          </button>
          <button onClick={typeOfColor === "hex" ? hexcolor : rgbcolor}>
            Generate Random Color
          </button>
        </div>
        <div>
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
