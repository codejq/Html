import { useState } from "react";

function TicToc() {
  const [count, setCount] = useState(0);
  const TicToc = () => {
    setCount((prevState) => prevState + 1);
    console.log(count);
  };

  return (
    <div className="text-center">
      <h1>{count}</h1>

      <button
        onClick={() => {
          TicToc();
        }}
      >
        TicToc
      </button>
    </div>
  );
}
export default TicToc;
