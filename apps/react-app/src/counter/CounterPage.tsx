import { useCallback, useMemo, useState } from "react";

function CounterPage() {
  const [counter, setCounter] = useState(0);
  const doubled = useMemo(() => counter * 2, [counter]);
  const increment = useCallback(() => setCounter((current) => current + 1), []);

  return (
    <>
      <h1>Counter</h1>
      <div>Counter: {counter}</div>
      <div>Doubled: {doubled}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default CounterPage;
