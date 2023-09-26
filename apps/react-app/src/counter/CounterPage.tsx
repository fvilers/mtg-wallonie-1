import { useCallback, useMemo, useState } from "react";
import Counter from "./Counter";
import styles from "./CounterPage.module.css";

function CounterPage() {
  const [counter, setCounter] = useState(0);
  const doubled = useMemo(() => counter * 2, [counter]);
  const increment = useCallback(() => setCounter((current) => current + 1), []);

  return (
    <>
      <h1 className={styles.h1}>Counter</h1>
      <Counter value={counter} />
      <Counter value={doubled} />
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default CounterPage;
