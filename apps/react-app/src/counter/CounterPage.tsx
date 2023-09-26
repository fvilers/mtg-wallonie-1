import { useCallback, useState } from "react";

function CounterPage() {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((current) => current + 1), []);

  return (
    <>
      <h1>Counter</h1>
      <div>{counter}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default CounterPage;
