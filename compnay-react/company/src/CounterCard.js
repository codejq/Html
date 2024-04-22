import { useState } from "react";

function CounterCard() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount((prevState) => prevState + 1);
    console.log(count);
  };

  return (
    <div className="text-center">
      <h1>{count}</h1>

      <button
        onClick={() => {
          Increment();
        }}
      >
        Increment
      </button>
    </div>
  );
}
export default CounterCard;
