import React, { useRef, useState } from "react";

const App = () => {
  const [val, setVal] = useState(null);
  console.log(val);

  const handlesubmit = () => {
    console.log(val);
  };
  return (
    <section>
      <form action="" onSubmit={handlesubmit}>
        <input type="button" value="1" onClick={() => setVal(1)} />
        <input type="button" value="2" onClick={() => setVal(2)} />
        <input type="button" value="3" onClick={() => setVal(3)} />
        <input type="button" value="4" onClick={() => setVal(4)} />
        <input type="button" value="5" onClick={() => setVal(5)} />
        <button >Submit</button>
      </form>
    </section>
  );
};

export default App;
